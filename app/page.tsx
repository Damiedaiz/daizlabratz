const missionParameters = [
  "This is not a traditional internship. This is a rigorous, future proof architectural upload designed for experts.",
  "Target: Transition from foundational coding to engineering automated, scalable digital infrastructures.",
  "Stack Readiness: Next.js / TypeScript / Tailwind CSS / Vercel Edge Networks.",
  "Integration: AI Interpretation Readiness (A.I.R.) protocols are heavily enforced.",
  "Aesthetic Override: Strict adherence to the ultra-premium corporate palette (Matte Black, Emerald Green, Metallic Gold)."
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="container">
        <header className="topbar">
          <div className="logo" aria-label="DaizLabRatZ Online">
            DaizLabRatZ<span>.Online</span>
          </div>
          <div className="status" aria-label="System active">
            <span className="status-dot">●</span> SYSTEM ACTIVE // E2E SECURE CONNECTION
          </div>
        </header>

        <section className="hero" aria-labelledby="page-title">
          <h2 className="glitch-text">Systems Over Hustle.</h2>
          <h1 id="page-title">The 21-Day Sprint</h1>
          <h2>Expert-to-Expert Protocol Active</h2>
        </section>

        <section className="grid-layout" aria-label="Sprint information and payment">
          <article className="hud-panel">
            <div className="panel-title">Mission Parameters</div>
            <div className="mission-list">
              {missionParameters.map((item) => (
                <p className="data-row" key={item}>{item}</p>
              ))}
            </div>
          </article>

          <article className="hud-panel terminal">
            <div className="panel-title terminal-title">Secure Payment Terminal</div>

            <div className="price-tag">₦200,000</div>

            <div className="account-details">
              <div>Bank: <span>Moniepoint</span></div>
              <div className="acct-number">8106367710</div>
              <div>Entity: <span>DaizSign Multimedia Ltd.</span></div>
            </div>

            <div className="payment-note">
              INITIALIZE ONBOARDING SEQUENCE BY TRANSMITTING PAYMENT RECEIPT TO:
              <br />
              <strong>daizsign@gmail.com</strong>
            </div>

            <a
              href="mailto:daizsign@gmail.com?subject=21-Day%20Sprint%20Payment%20Receipt"
              className="btn"
            >
              Confirm Transmission
            </a>

            <p className="receipt-hint">
              Attach your payment receipt to the email before sending.
            </p>
          </article>
        </section>

        <footer className="footer">
          <span>DAIZLABRATZ.ONLINE</span>
          <span>EXPERT-TO-EXPERT // 21 DAYS</span>
        </footer>
      </div>
    </main>
  );
}