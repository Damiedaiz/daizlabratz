import type { Check } from "./checkRepo";

const GH = "https://api.github.com";
const hdr: HeadersInit = {
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};
const j = async (u: string) => { const r = await fetch(u, { headers: hdr, cache: "no-store" }); return r.ok ? r.json() : null; };
const raw = async (u: string) => { const r = await fetch(u, { cache: "no-store" }); return r.ok ? r.text() : ""; };

export async function checkDay5(url: string): Promise<Check[]> {
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
  const src = files.filter((f) => /\.(jsx?|tsx?|css)$/.test(f.path) && f.size < 60000).slice(0, 45);
  const [pkgTxt, ...texts] = await Promise.all([raw(rawUrl("package.json")), ...src.map((f) => raw(rawUrl(f.path)))]);
  const code = texts.join("\n").toLowerCase();
  const out: Check[] = [{ id: "public", label: "Public repository", pass: true, detail: `${o}/${r}` }];

  const msgs: string[] = (commits ?? []).map((c: any) => c.commit.message.split("\n")[0]);
  const bad = msgs.filter((x) => !/^(feat|fix|style|refactor|docs|chore|test|perf)(\([\w-]+\))?: .{5,}/.test(x));
  out.push({ id: "commits", label: "Conventional commit messages throughout", pass: msgs.length >= 7 && bad.length === 0,
    detail: msgs.length < 7 ? `Only ${msgs.length} commit(s); commit the URL refactor and debounce separately.` : bad.length ? `Fix: "${bad[0]}"` : `${msgs.length} commits OK` });

  let deps: Record<string, string> = {};
  try { const p = JSON.parse(pkgTxt); deps = { ...p.dependencies, ...p.devDependencies }; } catch {}
  out.push({ id: "stack", label: "Next.js with Tailwind CSS", pass: !!deps.next && !!(deps.tailwindcss || deps["@tailwindcss/postcss"]), detail: "Checked package.json" });
  const css = files.filter((f) => f.path.endsWith(".css") && !/(^|\/)(globals|global|index)\.css$/.test(f.path));
  out.push({ id: "css", label: "No custom CSS files (Tailwind only)", pass: css.length === 0, detail: css.length ? `Remove ${css[0].path}` : "OK" });

  out.push({ id: "search", label: "Search input filtering by Name and Job Title", pass: /<input/.test(code) && /\.includes\(/.test(code) && /\.name/.test(code) && /\.title/.test(code) && /tolowercase\(\)/.test(code), detail: "Looks for an input and a case-insensitive .includes on name and title" });
  out.push({ id: "read", label: "Grid reads category and query from the URL", pass: /\.get\(\s*["']category["']\)/.test(code) && /\.get\(\s*["']query["']\)/.test(code) || (/searchparams/.test(code) && /category/.test(code) && /query/.test(code)), detail: "Looks for searchParams with category and query" });
  out.push({ id: "write", label: "URL updated with router.replace or push", pass: /router\.(replace|push)\(/.test(code) && /(urlsearchparams|usesearchparams)/.test(code), detail: "Looks for router.replace/push and URLSearchParams" });
  out.push({ id: "hydrate", label: "Search box pre-filled from the URL", pass: /(defaultvalue\s*=|usestate\([^)]*(searchparams|\.get\())/.test(code), detail: "Looks for defaultValue or initial state from the URL" });
  out.push({ id: "debounce", label: "300ms debounce on the input", pass: /(debounce)/.test(code) && /\b300\b/.test(code) && /(cleartimeout|settimeout)/.test(code), detail: "Looks for a debounce hook, 300 and setTimeout" });
  out.push({ id: "suspense", label: "useSearchParams handled safely (Suspense or server searchParams)", pass: /suspense/.test(code) || /\{\s*searchparams\b/.test(code) || /props\.searchparams/.test(code), detail: "Next.js needs a Suspense boundary around useSearchParams" });
  out.push({ id: "style", label: "Custom focus and placeholder styling", pass: /focus:(ring|border|outline)/.test(code) && /placeholder:/.test(code), detail: "Looks for focus: and placeholder: classes" });
  out.push({ id: "palette", label: "Matte black and emerald palette", pass: code.includes("0a0a0a") && /047857|emerald/.test(code), detail: "Looks for #0A0A0A and emerald" });
  out.push({ id: "manual", label: "Pre-filtered URL loads correctly on first paint", pass: false, manual: true, detail: "Test /?category=System+Architecture&query=Morgan in a new tab on your live site." });
  return out;
}
