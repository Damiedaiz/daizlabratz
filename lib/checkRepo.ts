export type Check = { id: string; label: string; pass: boolean; detail: string; manual?: boolean };

const GH = "https://api.github.com";
const hdr: HeadersInit = {
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};
const j = async (u: string) => { const r = await fetch(u, { headers: hdr, cache: "no-store" }); return r.ok ? r.json() : null; };
const raw = async (u: string) => { const r = await fetch(u, { cache: "no-store" }); return r.ok ? r.text() : ""; };

export async function checkDay1(url: string): Promise<Check[]> {
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
  const files: { path: string; size: number; type: string }[] = (tree?.tree ?? []).filter((f: any) => f.type === "blob" && !f.path.includes("node_modules"));
  const src = files.filter((f) => /\.(jsx?|tsx?|css)$/.test(f.path) && f.size < 60000).slice(0, 25);
  const rawUrl = (p: string) => `https://raw.githubusercontent.com/${o}/${r}/${br}/${p}`;
  const [pkgTxt, ...texts] = await Promise.all([raw(rawUrl("package.json")), ...src.map((f) => raw(rawUrl(f.path)))]);
  const code = texts.join("\n").toLowerCase();
  const out: Check[] = [{ id: "public", label: "Public repository", pass: true, detail: `${o}/${r}` }];

  const msgs: string[] = (commits ?? []).map((c: any) => c.commit.message.split("\n")[0]);
  const conv = /^(feat|fix|style|refactor|docs|chore|test|perf)(\([\w-]+\))?: .{5,}/;
  const bad = msgs.filter((x) => !conv.test(x));
  out.push({ id: "commits", label: "3+ commits, all with conventional messages", pass: msgs.length >= 3 && bad.length === 0,
    detail: msgs.length < 3 ? `Only ${msgs.length} commit(s).` : bad.length ? `Fix: "${bad[0]}"` : `${msgs.length} commits OK` });

  let deps: Record<string, string> = {};
  try { const p = JSON.parse(pkgTxt); deps = { ...p.dependencies, ...p.devDependencies }; } catch {}
  out.push({ id: "stack", label: "Next.js or React with Tailwind CSS", pass: !!(deps.next || deps.react) && !!(deps.tailwindcss || deps["@tailwindcss/postcss"]),
    detail: Object.keys(deps).length ? "Checked package.json" : "package.json not found at repo root" });

  const css = files.filter((f) => f.path.endsWith(".css") && !/(^|\/)(globals|global|index)\.css$/.test(f.path));
  out.push({ id: "css", label: "No custom CSS files (Tailwind only)", pass: css.length === 0, detail: css.length ? `Remove ${css[0].path}` : "OK" });

  const comp = files.filter((f) => /(^|\/)components?\//i.test(f.path) && /\.(jsx?|tsx?)$/.test(f.path));
  out.push({ id: "modular", label: "Modular: component files separate from the page", pass: comp.length >= 2, detail: `${comp.length} component file(s) found, need 2+` });

  const missing = ["0a0a0a", "121212", "d4af37"].filter((c) => !code.includes(c)).concat(code.includes("047857") || code.includes("emerald-700") ? [] : ["emerald-700"]);
  out.push({ id: "palette", label: "DaizSign palette used", pass: missing.length === 0, detail: missing.length ? `Missing: ${missing.join(", ")}` : "OK" });

  out.push({ id: "image", label: "4:5 image crop", pass: /aspect-\[4\/5\]|aspect-4\/5|4 \/ 5/.test(code), detail: "Looks for aspect-[4/5]" });
  out.push({ id: "button", label: "Connect or View Profile button", pass: /connect|view profile/.test(code), detail: "Looks for button text" });
  out.push({ id: "responsive", label: "Responsive Grid/Flexbox", pass: /\b(sm|md|lg):/.test(code) && /\b(flex|grid)\b/.test(code), detail: "Looks for breakpoints plus flex/grid" });
  out.push({ id: "luxury", label: "Visual polish: spacing, alignment, luxury feel", pass: false, manual: true, detail: "Reviewed by your mentor." });
  return out;
}
