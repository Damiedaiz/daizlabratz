import type { Check } from "./checkRepo";

const GH = "https://api.github.com";
const hdr: HeadersInit = {
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};
const j = async (u: string) => { const r = await fetch(u, { headers: hdr, cache: "no-store" }); return r.ok ? r.json() : null; };
const raw = async (u: string) => { const r = await fetch(u, { cache: "no-store" }); return r.ok ? r.text() : ""; };

export async function checkDay2(url: string): Promise<Check[]> {
  const m = url.trim().match(/^https:\/\/github\.com\/([\w.-]+)\/([\w.-]+?)(?:\.git)?\/?$/);
  if (!m) return [{ id: "url", label: "Valid GitHub repository link", pass: false, detail: "Use https://github.com/username/repo" }];
  const [, o, r] = m;
  const repo = await j(`${GH}/repos/${o}/${r}`);
  if (!repo || repo.private) return [{ id: "public", label: "Public repository", pass: false, detail: "Repository not found or not public." }];
  const br = repo.default_branch as string;
  const [commits, tree] = await Promise.all([
    j(`${GH}/repos/${o}/${r}/commits?per_page=100`),
    j(`${GH}/repos/${o}/${r}/git/trees/${br}?recursive=1`),
  ]);
  const files: { path: string; size: number }[] = (tree?.tree ?? []).filter((f: any) => f.type === "blob" && !f.path.includes("node_modules"));
  const rawUrl = (p: string) => `https://raw.githubusercontent.com/${o}/${r}/${br}/${p}`;
  const isSrc = (p: string) => /\.(jsx?|tsx?|css|json)$/.test(p) && !/package(-lock)?\.json$|tsconfig/.test(p);
  const src = files.filter((f) => isSrc(f.path) && f.size < 60000).slice(0, 30);
  const [pkgTxt, ...texts] = await Promise.all([raw(rawUrl("package.json")), ...src.map((f) => raw(rawUrl(f.path)))]);
  const code = texts.join("\n").toLowerCase();
  const out: Check[] = [{ id: "public", label: "Public repository", pass: true, detail: `${o}/${r}` }];

  const msgs: string[] = (commits ?? []).map((c: any) => c.commit.message.split("\n")[0]);
  const bad = msgs.filter((x) => !/^(feat|fix|style|refactor|docs|chore|test|perf)(\([\w-]+\))?: .{5,}/.test(x));
  out.push({ id: "commits", label: "Conventional commit messages throughout", pass: msgs.length >= 4 && bad.length === 0,
    detail: msgs.length < 4 ? `Only ${msgs.length} commit(s); Day 1 plus Day 2 work should show more.` : bad.length ? `Fix: "${bad[0]}"` : `${msgs.length} commits OK` });

  let deps: Record<string, string> = {};
  try { const p = JSON.parse(pkgTxt); deps = { ...p.dependencies, ...p.devDependencies }; } catch {}
  out.push({ id: "stack", label: "Next.js or React with Tailwind CSS", pass: !!(deps.next || deps.react) && !!(deps.tailwindcss || deps["@tailwindcss/postcss"]), detail: "Checked package.json" });

  const css = files.filter((f) => f.path.endsWith(".css") && !/(^|\/)(globals|global|index)\.css$/.test(f.path));
  out.push({ id: "css", label: "No custom CSS files (Tailwind only)", pass: css.length === 0, detail: css.length ? `Remove ${css[0].path}` : "OK" });

  out.push({ id: "props", label: "Card takes Name, Title, Bio, Skills, Image as props",
    pass: /\(\s*\{[^}]*\bskills\b[^}]*\}|props\.skills/.test(code) && /\bbio\b/.test(code) && /\b(image|img|photo|avatar)/.test(code),
    detail: "Looks for destructured props or props.skills" });
  out.push({ id: "data", label: "Mock data with 6+ executives", pass: (code.match(/\bbio["']?\s*:/g) ?? []).length >= 6, detail: `${(code.match(/\bbio["']?\s*:/g) ?? []).length} entries with a bio found` });
  out.push({ id: "map", label: "Cards rendered with .map() and a key", pass: /\.map\(/.test(code) && /key=\{/.test(code), detail: "Looks for .map( and key={" });
  out.push({ id: "state", label: "Filtering with useState and .filter()", pass: /usestate/.test(code) && /\.filter\(/.test(code), detail: "Looks for useState and .filter(" });
  out.push({ id: "buttons", label: "Filter buttons including All", pass: /onclick/.test(code) && /["'`>]all["'`<]/.test(code), detail: "Looks for onClick and an All option" });
  out.push({ id: "grid", label: "Responsive Tailwind grid", pass: /\bgrid\b/.test(code) && /\b(sm|md|lg|xl):grid-cols-\d/.test(code), detail: "Looks for grid plus breakpoint grid-cols" });
  out.push({ id: "bg", label: "Matte Black #0A0A0A dashboard background", pass: code.includes("0a0a0a"), detail: "Looks for #0A0A0A" });
  out.push({ id: "console", label: "Zero console errors and instant interaction", pass: false, manual: true, detail: "Open your live site and check the browser console yourself." });
  return out;
}
