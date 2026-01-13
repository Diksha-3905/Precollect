import "./index.css";

export default function App() {
  return (
    <div className="wrapper">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">Logo</div>

        <ul className="nav-links">
          <li>Home</li>
          <li className="active">Platform</li>
          <li>Solutions</li>
          <li>Contact Us</li>
          <li>Why Us</li>
          <li>Sign up</li>
        </ul>

        <button className="demo-btn">Request a Demo</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>
          A Unified Platform for Intelligent <span>Debt</span> collections
        </h1>

        <p>
          Digitise, automate, and optimise every step of the recovery lifecycle,
          from case upload to digital outreach, field visits, payments, and legal escalation.
          Built for speed, accuracy, and compliance.
        </p>
      </section>

      {/* MAIN HERO IMAGE */}
      <img className="banner" src="/image1.png" />

      {/* PLATFORM OVERVIEW */}
      <h3 className="section-heading">Platform Overview</h3>

      <img className="banner" src="/image2.png" />

      {/* GRID SECTION */}
      <h3 className="section-heading">A Unified Platform for End-to-End Debt Collections</h3>

      <div className="grid">

        <div className="card">
          <img src="/image3.png" />
          <h4>Smart Assignment & Workflow Automation</h4>
          <p>
      A unified space to upload, validate, and organize all delinquent accounts
      with automatic borrower profiling and a complete case timeline that keeps
      your entire portfolio structured and audit-ready.
    </p>
    <p>
      Our powerful workflow engine intelligently assigns cases to the right
      agent, partner, or channel based on risk, priority, past behaviour,
      capacity, and compliance rules — so your teams always work on the cases
      that matter most.
    </p>

        </div>

        <div className="card">
          <img src="/image4.png" />
          <h4>Omnichannel Communication</h4>
          <p>
      Reach borrowers across SMS, email, WhatsApp, IVR, and voice in a fully
      integrated communication layer — ensuring every interaction is tracked,
      compliant, and easy to audit.
    </p>
    <p>
      Automated reminder journeys, personalised messaging, and intelligent call
      routing help you connect with the right customer at the right time,
      improving resolution rates while reducing operational effort.
    </p>
        </div>

        <div className="card">
          <img src="/image5.png" />
          <h4>Field Visit & On-Ground Collections</h4>
          <p>
      A mobile-first system that enables field agents to complete geo-verified
      visits, capture evidence, update case notes in real time, and trigger
      actions instantly — even in low-network locations.
    </p>
    <p>
      Supervisors gain full visibility of team activity, visit performance, and
      high-risk accounts — helping improve accountability and recovery
      efficiency across your entire ground force.
    </p>
        </div>

        <div className="card">
          <img src="/image6.png" />
          <h4>Notice & Legal Lifecycle Automation</h4>
          <p>
    Digitally generate, issue, and track pre-legal notices in bulk while
    maintaining complete compliance with regulatory frameworks. Every document,
    acknowledgement, and delivery status is automatically recorded — giving you
    a real-time view of your legal pipeline.
  </p>

  <p>
    Seamlessly manage the entire legal process including filings, case hearing
    updates, affidavits, summons, and escalations — all from a single unified
    dashboard. Your team always knows the exact case status without chasing
    manual updates.
  </p>

  <p>
    Built-in audit trails, standardized templates, and approval controls ensure
    accuracy, reduce manual errors, and help your legal and compliance teams
    work faster with full transparency and accountability.
  </p>
        </div>

        <div className="card large">
          <img src="/image7.png" />
          <h4>Payments, Settlements & Analytics</h4>
          <p>
      Offer frictionless repayments through instant payment links, automated
      settlement workflows, reconciled collections instantly, and monitor
      performance with portfolio-wide dashboards and insights.
    </p>
    <p>
      Track agent efficiency, customer behaviour patterns, strategy performance,
      and recovery trends — enabling data-driven decision-making across your
      collections ecosystem.
    </p>

        </div>

      </div>

      {/* CTA */}
      <div className="cta">
        <h3>Digitise Your Entire Collections Ecosystem</h3>
        <button>Request a Demo</button>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div>
            <h4>LOGO</h4>
            <p>Sign up to receive updates</p>

            <div className="email-box">
              <input placeholder="Enter your email" />
              <button>Submit</button>
            </div>

            <p>Location<br />Pune, Maharashtra</p>
          </div>

          <div>
            <h4>Company</h4>
            <p>About</p>
            <p>Contact Us</p>
          </div>

          <div>
            <h4>Products</h4>
            <p>PreHire</p>
            <p>PreSchool</p>
            <p>PreSchedule</p>
            <p>PreSecure</p>
          </div>

          <div>
            <h4>Legal</h4>
            <p>Privacy Policy</p>
            <p>Security</p>
          </div>
        </div>

        <p className="copyright">©2026 — All rights reserved</p>
      </footer>

    </div>
  );
}
