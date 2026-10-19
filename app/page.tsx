'use client';

import { useState } from 'react';

type LabelZone = {
  title: string;
  description: string;
  details: string[];
};

const labelZones: LabelZone[] = [
  {
    title: 'Zone 1: Apothecary header',
    description: 'Top 15% of the label.',
    details: ['Brand crest', 'Batch serial', 'Extraction ratio in tracked monospace'],
  },
  {
    title: 'Zone 2: Hero nomenclature',
    description: 'Central 45%, framed by white space.',
    details: [
      'Protocol name in Cormorant Garamond',
      'Structure/function descriptor, no cure claims',
      'Certified net volume',
    ],
  },
  {
    title: 'Zone 3: Clinical facts',
    description: 'Next 25%.',
    details: [
      'Active botanicals by Latin binomial and plant part',
      'Dosing or decoction directions',
      'Contraindication notes',
    ],
  },
  {
    title: 'Zone 4: Compliance perimeter',
    description: 'Bottom 15%.',
    details: ['QR code to the batch certificate of analysis', 'Origin statement', 'Regulatory disclaimer'],
  },
];

export default function JZHerbalsPage() {
  const [activeZone, setActiveZone] = useState(0);

  return (
    <main className="jzh-page">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,700;1,400&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <title>JZ Herbals Apothecary: From Street Agbo to Clinical Apothecary</title>

      <nav className="jzh-nav" aria-label="Main navigation">
        <div className="w nav-inner">
          <a className="brand" href="#top">JZ Herbals</a>
          <div className="nav-links">
            <a href="#leaks">The audit</a>
            <a href="#kit">Brand kit</a>
            <a href="#label">Label</a>
            <a href="#stack">Commerce</a>
            <a href="#course">Masterclass</a>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="w stage">
          <p className="mono">Lagos, Nigeria · small-batch botanical formulations</p>
          <h1>The same roots. A different architecture.</h1>
          <p className="hero-copy">
            How a street herbal business was rebuilt as a clinical apothecary brand: standardized labels,
            UV-protective glass, batch-verified lab certificates, and an AI sales assistant that answers in under
            four seconds.
          </p>
          <div className="split">
            <div className="old">
              <small>Before: polythene pouch, photocopied label</small>
              <div className="price">$4</div>
              <small>Haggled on WhatsApp. 25–35% margin.</small>
            </div>
            <div className="new">
              <small>After: 50 ml amber tincture, gold-foil seal</small>
              <div className="price">$75</div>
              <small>Fixed price. 68–78% target margin.</small>
            </div>
          </div>
          <a className="cta" href="#course">See the full system</a>
        </div>
      </header>

      <section id="leaks">
        <div className="w">
          <h2>Four leaks were draining the revenue</h2>
          <p>The botanicals were never the problem. Trust, pricing, speed, and compliance were.</p>
          <div className="g g4">
            <article className="leak">
              <b>1</b><h3>Visual trust</h3>
              <p>Polythene pouches and photocopied labels look like unregulated mixtures, so buyers discount them.</p>
            </article>
            <article className="leak">
              <b>2</b><h3>Pricing power</h3>
              <p>Commodity packaging invites haggling in DMs and caps gross margin near 28%.</p>
            </article>
            <article className="leak">
              <b>3</b><h3>Reply speed</h3>
              <p>Manual replies took hours. Buyers with high intent left before checkout.</p>
            </article>
            <article className="leak">
              <b>4</b><h3>Traceability</h3>
              <p>No batch records or standard dosing language blocks ads and cross-border shipping.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="mdssmc">
        <div className="w">
          <h2>MDSSMC: every failure becomes a rule</h2>
          <p>
            The operating framework behind the rebuild. Four pillars turn intent, mistakes, design, and proof into a
            system competitors cannot copy.
          </p>
          <div className="g g4">
            <article>
              <h3>Manually Doctored</h3>
              <p>Humans set the intent first: sharp corners, a fixed palette, deliberate type. No generic template defaults.</p>
            </article>
            <article>
              <h3>Schematic Scar</h3>
              <p>Each failure is recorded and built into the backend. Bitter, gritty decoctions led to micronized filtration and tamper seals.</p>
            </article>
            <article>
              <h3>Marks</h3>
              <p>One visual signature across screen and shelf, built on 1:1 and 4:5 formats and five colour tokens.</p>
            </article>
            <article>
              <h3>Copyright</h3>
              <p>Lived process plus lab-verified batches create a moat that copying a logo cannot reach.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="kit">
        <div className="w">
          <h2>A brand kit with five colours and four type tiers</h2>
          <p>Gold foil stays under 12% of the pack surface. Restraint is what reads as pharmaceutical.</p>
          <div className="sw">
            <div className="sw-obsidian">Obsidian Matte<br />#090A0F<br />Canvas</div>
            <div className="sw-emerald">Apothecary Emerald<br />#064E3B<br />Accent</div>
            <div className="sw-gold">Sovereign Amber Gold<br />#D97706<br />Seal</div>
            <div className="sw-alabaster">Warm Alabaster<br />#F8FAFC<br />Surface</div>
            <div className="sw-slate">Laboratory Slate<br />#64748B<br />Metadata</div>
          </div>
          <div className="type">
            <div><span className="mono">Tier 1 · Display</span><span className="type-display">UTERINE CLARITY™</span></div>
            <div><span className="mono">Tier 2 · Subheads</span><span className="type-subhead">Standardized dual-extract tincture</span></div>
            <div><span className="mono">Tier 3 · Body</span><span className="type-body">Take as directed. Shake gently before use. Store away from light.</span></div>
            <div><span className="mono">Tier 4 · Telemetry</span><span className="mono">LOT JZH-2026-10A · EXTRACT 1:3 W/V · EXP 10/2028</span></div>
          </div>
        </div>
      </section>

      <section id="label">
        <div className="w">
          <h2>The four-zone label, one tap at a time</h2>
          <p>Every bottle follows the same grid. Select a zone to see what it holds.</p>
          <div className="lab">
            <div className="label-preview" role="group" aria-label="Label zones">
              <button className={`zone z1 ${activeZone === 0 ? 'is-active' : ''}`} aria-pressed={activeZone === 0} onClick={() => setActiveZone(0)}>
                <span className="m">JZ HERBALS APOTHECARY · LOT JZH-2026-10A</span>
                <span className="m">1:3 DUAL-EXTRACT</span>
              </button>
              <button className={`zone z2 ${activeZone === 1 ? 'is-active' : ''}`} aria-pressed={activeZone === 1} onClick={() => setActiveZone(1)}>
                <span className="t">UTERINE CLARITY™</span>
                <span className="label-subtitle">Standardized dual-extract tincture · 50 ml</span>
              </button>
              <button className={`zone z3 ${activeZone === 2 ? 'is-active' : ''}`} aria-pressed={activeZone === 2} onClick={() => setActiveZone(2)}>
                <span className="botanicals"><i>Fagara zanthoxyloides</i>, <i>Kigelia africana</i></span>
                <span className="m">DOSING AND ADMINISTRATION</span>
              </button>
              <button className={`zone z4 ${activeZone === 3 ? 'is-active' : ''}`} aria-pressed={activeZone === 3} onClick={() => setActiveZone(3)}>
                <span className="m">QR → VERIFY.DAIZLAB.STORE/COA/[BATCH_ID]</span>
                <span className="m">MADE IN LAGOS · SEE DISCLAIMER</span>
              </button>
            </div>
            <div className="info" aria-live="polite">
              <h3>{labelZones[activeZone].title}</h3>
              <p>{labelZones[activeZone].description}</p>
              <ul>
                {labelZones[activeZone].details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          </div>
          <div className="g g3 packaging-grid">
            <article><h3>Oral extracts</h3><p>Type III amber glass blocking UV, DIN-18 neck, graduated 0.25 ml glass pipette, matte cotton label stock, tamper-evident neck band.</p></article>
            <article><h3>Powders and barks</h3><p>Matte black MOPP/VMPET/PE barrier pouch, resealable zipper, laser-scored tear notches, inkjet lot and expiry stamp.</p></article>
            <article><h3>Protocol box</h3><p>Rigid emerald linen box with magnetic closure, gold-foil crest, velvet-lined insert, and a serialized holographic seal.</p></article>
          </div>
        </div>
      </section>

      <section id="stack">
        <div className="w">
          <h2>A storefront that works while the founder sleeps</h2>
          <p>Next.js storefront, live Supabase inventory, and three automated workers handle the sales loop.</p>
          <div className="g g3">
            <article className="unit"><span className="mono">UNIT-01</span><h3>AI sales assistant</h3><p>Answers on WhatsApp 24/7, checks live stock, suggests the right protocol, and sends a Paystack or Stripe checkout link in under four seconds.</p></article>
            <article className="unit"><span className="mono">UNIT-02</span><h3>AI product publisher</h3><p>Turns three photos into a clinical title, description, multi-currency prices (NGN, USD, GBP), and JSON-LD for search.</p></article>
            <article className="unit"><span className="mono">UNIT-03</span><h3>AI growth coach</h3><p>Watches revenue and stock, flags dips and low inventory, and prompts repeat buyers when it is time to reorder.</p></article>
          </div>
          <div className="g g4 tiers">
            <article className="tier"><span className="mono">Free</span><div className="tier-price">₦0</div><p>Subdomain, basic storefront, manual inventory.</p></article>
            <article className="tier"><span className="mono">Starter</span><div className="tier-price">₦5,000</div><p>Custom domain, product publisher, schema markup.</p></article>
            <article className="tier"><span className="mono">Growth</span><div className="tier-price">₦12,000</div><p>Supabase state and the WhatsApp sales assistant.</p></article>
            <article className="tier"><span className="mono">Scale</span><div className="tier-price">₦25,000</div><p>Growth coach, stock alerts, courier webhooks.</p></article>
          </div>
        </div>
      </section>

      <section id="proof">
        <div className="w">
          <h2>Ninety days, before and after</h2>
          <p>Target figures from the project dossier, shown as modeled outcomes rather than audited results.</p>
          <div className="met">
            <div><span className="mono">Average order value</span><div className="metric"><s>$12</s> → <em>$68</em></div></div>
            <div><span className="mono">Gross margin</span><div className="metric"><s>28%</s> → <em>74%</em></div></div>
            <div><span className="mono">Reply time</span><div className="metric"><s>6 hours</s> → <em>3.4 s</em></div></div>
            <div><span className="mono">90-day repeat customers</span><div className="metric"><em>44%</em></div></div>
          </div>
        </div>
      </section>

      <section id="course">
        <div className="w">
          <h2>Engineering the Botanical Empire</h2>
          <p>The whole rebuild, taught in six modules at daizlabratz.online. Each one ends with something you ship.</p>
          <div className="g g2">
            <article><span className="mono">Module 1</span><h3>Forensic audit</h3><p>Find revenue leaks in WhatsApp commerce. Deliverable: a 20-point friction audit.</p></article>
            <article><span className="mono">Module 2</span><h3>Visual identity</h3><p>Colour, type, and a compact STYLE.md. Deliverable: a Figma design system.</p></article>
            <article><span className="mono">Module 3</span><h3>Packaging and sourcing</h3><p>Glass, barrier films, label compliance. Deliverable: die-cut vector templates.</p></article>
            <article><span className="mono">Module 4</span><h3>Headless commerce</h3><p>Next.js, Supabase, WhatsApp webhook. Deliverable: a live storefront repo.</p></article>
            <article><span className="mono">Module 5</span><h3>COA transparency hub</h3><p>QR codes that open batch lab certificates. Deliverable: a verification portal.</p></article>
            <article><span className="mono">Module 6</span><h3>LinkedIn content engine</h3><p>A 10-slide 4:5 carousel and a 60-minute launch routine. Deliverable: the finished deck.</p></article>
          </div>
          <a className="cta" href="https://daizlabratz.online">Join DaizLabRatZ</a>
        </div>
      </section>

      <footer className="jzh-footer">
        <div className="w">
          <strong>Systems over hustle.</strong>
          <p>© 2026 DaizLab. Herbal products are not evaluated to diagnose, treat, cure, or prevent any disease. Speak to a qualified health professional before use. Figures on this page are modeled targets.</p>
        </div>
      </footer>

      <style jsx global>{`
        .jzh-page {
          --bg: #090A0F;
          --surface: #11131a;
          --ink: #F8FAFC;
          --muted: #94a3b8;
          --line: #27272A;
          --em: #10B981;
          --emd: #064E3B;
          --gold: #D97706;
          --slate: #64748B;
          min-height: 100vh;
          background: var(--bg);
          color: var(--ink);
          font: 400 16px/1.6 Inter, system-ui, sans-serif;
          padding-top: env(safe-area-inset-top, 0px);
          padding-bottom: env(safe-area-inset-bottom, 0px);
        }
        @media (prefers-color-scheme: light) {
          .jzh-page:not([data-theme="dark"]) { --bg: #F8FAFC; --surface: #fff; --ink: #090A0F; --muted: #475569; --line: #d9dee5; --em: #064E3B; --gold: #9a5300; }
        }
        .jzh-page *, .jzh-page *::before, .jzh-page *::after { box-sizing: border-box; }
        .jzh-page h1, .jzh-page h2, .jzh-page h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700; letter-spacing: -.02em; line-height: 1.1; margin: 0; }
        .jzh-page h2 { font-size: clamp(2rem, 5vw, 3.4rem); max-width: 18ch; }
        .jzh-page p { max-width: 62ch; color: var(--muted); }
        .jzh-page section { padding: 88px 0; border-top: 1px solid var(--line); scroll-margin-top: 64px; }
        .jzh-page .w { max-width: 1080px; margin: 0 auto; padding: 0 22px; }
        .jzh-page .mono { font-family: 'JetBrains Mono', monospace; font-size: .75rem; color: var(--slate); }
        .jzh-nav { position: sticky; top: env(safe-area-inset-top, 0px); z-index: 5; background: var(--bg); border-bottom: 1px solid var(--line); }
        .jzh-nav .nav-inner { display: flex; justify-content: space-between; align-items: center; min-height: 56px; gap: 20px; }
        .jzh-nav .brand { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; color: var(--gold); font-weight: 700; text-decoration: none; }
        .jzh-nav .nav-links { display: flex; align-items: center; gap: 18px; }
        .jzh-nav a:not(.brand) { color: var(--muted); text-decoration: none; font-size: .85rem; }
        .jzh-nav a:hover, .jzh-nav a:focus-visible, .jzh-page a:focus-visible, .jzh-page button:focus-visible { color: var(--ink); outline: 2px solid var(--gold); outline-offset: 3px; }
        .jzh-page .hero { padding: 72px 0 64px; border: 0; }
        .jzh-page .hero h1 { font-size: clamp(2.6rem, 8vw, 6rem); max-width: 13ch; }
        .jzh-page .hero-copy { font-size: 1.15rem; margin: 22px 0 0; }
        .jzh-page .split { display: grid; grid-template-columns: 1fr 1fr; margin-top: 48px; border: 1px solid var(--line); }
        .jzh-page .split > div { padding: 36px 28px; min-height: 260px; display: flex; flex-direction: column; justify-content: space-between; }
        .jzh-page .old { background: repeating-linear-gradient(135deg, transparent 0 12px, rgba(100,116,139,.08) 12px 24px); }
        .jzh-page .new { background: var(--emd); color: #F8FAFC; border-left: 1px solid var(--gold); }
        .jzh-page .price { font-family: 'Cormorant Garamond', serif; font-size: clamp(3.5rem, 11vw, 7rem); font-weight: 700; line-height: 1; }
        .jzh-page .new .price { color: #F59E0B; }
        .jzh-page .old .price { color: var(--slate); text-decoration: line-through; text-decoration-thickness: 3px; }
        .jzh-page .split small { font-family: 'JetBrains Mono', monospace; font-size: .75rem; opacity: .8; }
        .jzh-page .cta { display: inline-block; margin-top: 30px; padding: 14px 26px; background: var(--gold); color: #090A0F; font-weight: 600; text-decoration: none; }
        .jzh-page .cta:hover { filter: brightness(1.08); }
        .jzh-page .g { display: grid; gap: 1px; background: var(--line); border: 1px solid var(--line); margin-top: 44px; }
        .jzh-page .g > * { background: var(--bg); padding: 26px; min-width: 0; }
        .jzh-page .g4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        .jzh-page .g3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .jzh-page .g2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .jzh-page .g h3 { font-size: 1.55rem; margin-bottom: 8px; }
        .jzh-page .g p { margin: 0; font-size: .93rem; }
        .jzh-page .leak b { font-family: 'Cormorant Garamond', serif; font-size: 2.6rem; color: var(--gold); display: block; line-height: 1; }
        .jzh-page .sw { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); margin-top: 44px; border: 1px solid var(--line); }
        .jzh-page .sw div { padding: 70px 14px 14px; font-family: 'JetBrains Mono', monospace; font-size: .72rem; overflow-wrap: anywhere; }
        .jzh-page .sw-obsidian { background: #090A0F; color: #F8FAFC; }
        .jzh-page .sw-emerald { background: #064E3B; color: #F8FAFC; }
        .jzh-page .sw-gold { background: #D97706; color: #090A0F; }
        .jzh-page .sw-alabaster { background: #F8FAFC; color: #090A0F; }
        .jzh-page .sw-slate { background: #64748B; color: #F8FAFC; }
        .jzh-page .type { margin-top: 44px; display: grid; gap: 0; border: 1px solid var(--line); }
        .jzh-page .type > div { display: grid; grid-template-columns: 150px minmax(0, 1fr); gap: 16px; padding: 18px 22px; border-top: 1px solid var(--line); align-items: baseline; }
        .jzh-page .type > div:first-child { border: 0; }
        .jzh-page .type-display { font: 700 2.6rem 'Cormorant Garamond', serif; }
        .jzh-page .type-subhead { font: 600 1.15rem Inter, sans-serif; }
        .jzh-page .type-body { font: 400 .95rem Inter, sans-serif; }
        .jzh-page .lab { display: grid; grid-template-columns: 340px minmax(0, 1fr); gap: 48px; margin-top: 44px; align-items: start; }
        .jzh-page .label-preview { border: 1px solid var(--gold); background: #F8FAFC; color: #090A0F; height: 520px; display: flex; flex-direction: column; }
        .jzh-page .zone { border: 0; border-bottom: 1px dashed #94a3b8; background: transparent; text-align: left; padding: 14px 18px; font: inherit; color: inherit; cursor: pointer; display: flex; flex-direction: column; justify-content: center; transition: background .2s; }
        .jzh-page .zone:last-child { border: 0; }
        .jzh-page .zone.is-active { background: #064E3B; color: #F8FAFC; }
        .jzh-page .z1 { flex: 15; }
        .jzh-page .z2 { flex: 45; }
        .jzh-page .z3 { flex: 25; }
        .jzh-page .z4 { flex: 15; }
        .jzh-page .zone .t { font-family: 'Cormorant Garamond', serif; font-size: 2.1rem; font-weight: 700; line-height: 1; }
        .jzh-page .zone .m { font-family: 'JetBrains Mono', monospace; font-size: .62rem; letter-spacing: .05em; overflow-wrap: anywhere; }
        .jzh-page .label-subtitle { font-size: .8rem; }
        .jzh-page .botanicals { font-size: .78rem; }
        .jzh-page .info h3 { font-size: 2.3rem; }
        .jzh-page .info ul { padding-left: 18px; color: var(--muted); }
        .jzh-page .info li { margin: 8px 0; }
        .jzh-page .packaging-grid { margin-top: 64px; }
        .jzh-page .unit { border-left: 3px solid var(--em) !important; }
        .jzh-page .unit .mono { color: var(--em); }
        .jzh-page .met { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; background: var(--line); border: 1px solid var(--line); margin-top: 44px; }
        .jzh-page .met > div { background: var(--bg); padding: 26px; }
        .jzh-page .metric { font-family: 'Cormorant Garamond', serif; font-size: 2.4rem; font-weight: 700; }
        .jzh-page .met s { color: var(--slate); }
        .jzh-page .met em { font-style: normal; color: var(--em); }
        .jzh-page .tier-price { font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; color: var(--gold); font-weight: 700; }
        .jzh-page .jzh-footer { padding: 48px 0; border-top: 1px solid var(--line); font-size: .82rem; color: var(--muted); }
        .jzh-page .jzh-footer strong { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; color: var(--gold); }
        .jzh-page .jzh-footer p { font-size: .8rem; }
        .jzh-page .stage { animation: jzh-rise .9s ease both; }
        @keyframes jzh-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) { .jzh-page .stage { animation: none; } .jzh-page .zone { transition: none; } }
        @media (max-width: 820px) {
          .jzh-page .g4, .jzh-page .g3, .jzh-page .sw { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .jzh-page .g2, .jzh-page .met { grid-template-columns: 1fr; }
          .jzh-page .lab { grid-template-columns: 1fr; }
          .jzh-page .label-preview { height: 480px; }
          .jzh-page .type > div { grid-template-columns: 1fr; }
          .jzh-nav .nav-links { display: none; }
          .jzh-page .split { grid-template-columns: 1fr; }
          .jzh-page .split .new { border-left: 0; border-top: 1px solid var(--gold); }
        }
        @media (max-width: 480px) {
          .jzh-page .g4, .jzh-page .g3, .jzh-page .sw { grid-template-columns: 1fr; }
          .jzh-page .hero { padding-top: 52px; }
          .jzh-page section { padding: 64px 0; }
          .jzh-page .split > div { min-height: 220px; padding: 26px 22px; }
          .jzh-page .zone { padding: 12px; }
          .jzh-page .zone .t { font-size: 1.8rem; }
        }
      `}</style>
    </main>
  );
}
