import type { Check } from "./checkRepo";

const GH = "https://api.github.com";
const hdr: HeadersInit = {
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};
const j = async (u: string) => { const r = await fetch(u, { headers: hdr, cache: "no-store" }); return r.ok ? r.json() : null; };
const raw = async (u: string) => { const r = await fetch(u, { cache: "no-store" }); return r.ok ? r.text() : ""; };

export async function checkDay4(url: string): Promise<Check[]> {
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
  const isSrc = (p: string) => /\.(jsx?|tsx?|css)$/.test(p);
  const src = files.filter((f) => isSrc(f.path) && f.size < 60000).slice(0, 45);
  const [pkgTxt, ...texts] = await Promise.all([raw(rawUrl("package.json")), ...src.map((f) => raw(rawUrl(f.path)))]);
  const code = texts.join("\n").toLowerCase();
  const out: Check[] = [{ id: "public", label: "Public repository", pass: true, detail: `${o}/${r}` }];

  const msgs: string[] = (commits ?? []).map((c: any) => c.commit.message.split("\n")[0]);
  const bad = msgs.filter((x) => !/^(feat|fix|style|refactor|docs|chore|test|perf)(\([\w-]+\))?: .{5,}/.test(x));
  out.push({ id: "commits", label: "Conventional commit messages throughout", pass: msgs.length >= 6 && bad.length === 0,
    detail: msgs.length < 6 ? `Only ${msgs.length} commit(s); use structural commits.` : bad.length ? `Fix: "${bad[0]}"` : `${msgs.length} commits OK` });

  let deps: Record<string, string> = {};
  try { const p = JSON.parse(pkgTxt); deps = { ...p.dependencies, ...p.devDependencies }; } catch {}
  out.push({ id: "stack", label: "Next.js with Tailwind CSS", pass: !!deps.next && !!(deps.tailwindcss || deps["@tailwindcss/postcss"]), detail: "Checked package.json" });
  const css = files.filter((f) => f.path.endsWith(".css") && !/(^|\/)(globals|global|index)\.css$/.test(f.path));
  out.push({ id: "css", label: "No custom CSS files (Tailwind only)", pass: css.length === 0, detail: css.length ? `Remove ${css[0].path}` : "OK" });

  const route = files.find((f) => /(^|\/)app\/(onboarding|add-profile)\/page\.(tsx|jsx|js)$/.test(f.path));
  out.push({ id: "route", label: "Route at /onboarding or /add-profile", pass: !!route, detail: route ? route.path : "No app/onboarding/page or app/add-profile/page found" });

  out.push({ id: "fields", label: "Form with name, title, bio textarea and skills", pass: /<form|onsubmit/.test(code) && /<textarea/.test(code) && /\bskills?\b/.test(code) && /\bname\b/.test(code) && /\btitle\b/.test(code), detail: "Looks for form, textarea, name, title, skills" });
  out.push({ id: "bio", label: "Bio limits of 50 and 200 characters", pass: /\b50\b/.test(code) && /\b200\b/.test(code), detail: "Looks for 50 and 200" });
  out.push({ id: "trim", label: "Whitespace-only input rejected (trim)", pass: /\.trim\(\)/.test(code), detail: "Looks for .trim()" });
  out.push({ id: "skillmax", label: "Skills limited to 3", pass: /(length\s*(>=|>|<=|<|===)\s*3|max\(\s*3|\b3\b)/.test(code) && /skills?/.test(code), detail: "Looks for a limit of 3 on skills" });
  out.push({ id: "nopopup", label: "No browser pop-ups or native validation bubbles", pass: !/\balert\(/.test(code) && (/novalidate/.test(code) || !/\srequired[\s>=/]/.test(code)), detail: "No alert(, and noValidate or no required attributes" });
  out.push({ id: "errors", label: "Inline error messages in a brand colour", pass: /error/.test(code) && /(crimson|red-|rose-|amber|d4af37|gold)/.test(code), detail: "Looks for error state and a crimson/gold colour" });
  out.push({ id: "sim", label: "Simulated POST with setTimeout promise", pass: /settimeout/.test(code) && /promise/.test(code), detail: "Looks for setTimeout inside a Promise" });
  out.push({ id: "loading", label: "Loading state on the submit button", pass: /(loading|submitting|pending)/.test(code) && /disabled/.test(code), detail: "Looks for a loading flag and disabled" });
  out.push({ id: "toast", label: "Success toast", pass: /toast/.test(code), detail: "Looks for a toast component or state" });
  out.push({ id: "redirect", label: "Redirect to dashboard after success", pass: /(router\.(push|replace)|redirect\()/.test(code), detail: "Looks for router.push or redirect" });
  out.push({ id: "custom", label: "Custom focus rings and checkbox/pill styling", pass: /focus:(ring|border|outline)/.test(code) && /(peer|sr-only|appearance-none|aria-pressed|accent-)/.test(code), detail: "Looks for focus: styles and custom controls" });
  out.push({ id: "palette", label: "Matte black and emerald palette", pass: code.includes("0a0a0a") && /047857|emerald/.test(code), detail: "Looks for #0A0A0A and emerald" });
  out.push({ id: "manual", label: "Cannot be broken, and the flow feels smooth", pass: false, manual: true, detail: "Try empty spaces and 201 characters on your live form." });
  return out;
}
