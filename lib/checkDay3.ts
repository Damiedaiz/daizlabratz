import type { Check } from "./checkRepo";

const GH = "https://api.github.com";
const hdr: HeadersInit = {
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};
const j = async (u: string) => { const r = await fetch(u, { headers: hdr, cache: "no-store" }); return r.ok ? r.json() : null; };
const raw = async (u: string) => { const r = await fetch(u, { cache: "no-store" }); return r.ok ? r.text() : ""; };

export async function checkDay3(url: string): Promise<Check[]> {
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
  const src = files.filter((f) => isSrc(f.path) && f.size < 60000).slice(0, 40);
  const [pkgTxt, ...texts] = await Promise.all([raw(rawUrl("package.json")), ...src.map((f) => raw(rawUrl(f.path)))]);
  const docs = src.map((f, i) => ({ path: f.path, text: texts[i].toLowerCase() }));
  const code = docs.map((d) => d.text).join("\n");
  const out: Check[] = [{ id: "public", label: "Public repository", pass: true, detail: `${o}/${r}` }];

  const msgs: string[] = (commits ?? []).map((c: any) => c.commit.message.split("\n")[0]);
  const bad = msgs.filter((x) => !/^(feat|fix|style|refactor|docs|chore|test|perf)(\([\w-]+\))?: .{5,}/.test(x));
  out.push({ id: "commits", label: "Conventional commit messages throughout", pass: msgs.length >= 5 && bad.length === 0,
    detail: msgs.length < 5 ? `Only ${msgs.length} commit(s); show your routing work in separate commits.` : bad.length ? `Fix: "${bad[0]}"` : `${msgs.length} commits OK` });

  let deps: Record<string, string> = {};
  try { const p = JSON.parse(pkgTxt); deps = { ...p.dependencies, ...p.devDependencies }; } catch {}
  out.push({ id: "stack", label: "Next.js (App Router) with Tailwind CSS", pass: !!deps.next && !!(deps.tailwindcss || deps["@tailwindcss/postcss"]), detail: "Next.js is required from Day 3" });

  const css = files.filter((f) => f.path.endsWith(".css") && !/(^|\/)(globals|global|index)\.css$/.test(f.path));
  out.push({ id: "css", label: "No custom CSS files (Tailwind only)", pass: css.length === 0, detail: css.length ? `Remove ${css[0].path}` : "OK" });

  const dyn = files.find((f) => /(^|\/)app\/.*\[[\w.]+\]\/page\.(tsx|jsx|js)$/.test(f.path));
  out.push({ id: "route", label: "Dynamic route like app/profile/[id]/page", pass: !!dyn, detail: dyn ? dyn.path : "No [param]/page file found under app/" });

  const dataFile = docs.find((d) => !/(^|\/)(components?|app)\//.test(d.path) && (d.text.match(/\bbio["']?\s*:/g) ?? []).length >= 6);
  out.push({ id: "data", label: "Mock data in a separate utility file (6+ entries)", pass: !!dataFile, detail: dataFile ? dataFile.path : "Move the array out of components and app pages, e.g. lib/executives.ts" });

  out.push({ id: "async", label: "Async fetch function like getExecutiveById", pass: /(async\s+function\s+get\w+|get\w+\s*=\s*async)/.test(code), detail: "Looks for an async get... function" });
  out.push({ id: "link", label: "Next.js Link passing the ID to the route", pass: /from ["']next\/link["']/.test(code) && /\/[\w-]+\/\$\{[^}]*(id|slug)/.test(code), detail: "Looks for Link and a /profile/${id} style href" });
  out.push({ id: "notfound", label: "Custom not-found page for unknown IDs", pass: /notfound\(/.test(code) && files.some((f) => /(^|\/)not-found\.(tsx|jsx|js)$/.test(f.path)), detail: "Needs notFound() and a not-found file" });
  out.push({ id: "content", label: "About and Recent Projects/Publications sections", pass: /\babout\b/.test(code) && /(recent projects|publications|projects)/.test(code), detail: "Looks for both headings" });
  out.push({ id: "back", label: "Back to Network navigation", pass: /back to network/.test(code), detail: "Looks for the text Back to Network" });
  out.push({ id: "palette", label: "Matte black, emerald and gold palette", pass: code.includes("0a0a0a") && code.includes("d4af37") && /047857|emerald/.test(code), detail: "Looks for #0A0A0A, #D4AF37 and emerald" });
  out.push({ id: "manual", label: "Instant navigation and premium visual feel", pass: false, manual: true, detail: "Test your live site: no full reload, 404 page looks on-brand." });
  return out;
}
