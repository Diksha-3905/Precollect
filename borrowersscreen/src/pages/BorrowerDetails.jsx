import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatusBadge from "../components/StatusBadge";
import "../styles/details.css";

export default function BorrowerDetails() {
  return (
    <div className="app-layout">
      {/* ===== Sidebar ===== */}
      <Sidebar />

      {/* ===== Right Panel ===== */}
      <div className="details-wrapper">
        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <div className="details-content">

          {/* ===== Case Header ===== */}
          <div className="case-header">
            <div className="case-header-item">
              <h3>Riya Arora</h3>
              <span>Borrower name</span>
            </div>

            <div className="case-header-item">
              <h3>ID: #833520</h3>
              <span>Case ID</span>
            </div>

            <div className="case-header-item">
              <h3>Personal Loan</h3>
              <span>Loan Type</span>
            </div>

            <div className="case-header-item">
              <h3>₹ 34,000</h3>
              <span>Outstanding Amount</span>
            </div>

            <StatusBadge status="Overdue 30+ days" />
          </div>

          {/* ===== Main Grid ===== */}
          <div className="details-grid">

            {/* ===== Borrower Information ===== */}
            <div className="card">
              <h4>Borrower Information</h4>

              <div className="info-grid">
                <div>
                  <label>NAME</label>
                  <p>Riya Arora</p>
                </div>

                <div>
                  <label>EMAIL ADDRESS</label>
                  <p>RiyaArora@gmail.com</p>
                </div>

                <div>
                  <label>PRIMARY PHONE</label>
                  <p>+91 8604907281</p>
                </div>

                <div>
                  <label>SECONDARY PHONE</label>
                  <p>+91 8888807281</p>
                </div>

                <div>
                  <label>CURRENT ADDRESS</label>
                  <p>901-B Building, Laxmi Vihar</p>
                </div>

                <div>
                  <label>EMPLOYMENT</label>
                  <p>Project Manager at Infosys</p>
                </div>
              </div>
            </div>

            {/* ===== Quick Actions ===== */}
            <div className="card">
              <h4>Quick Actions</h4>

              <button className="action-btn">
                ✔ Mark as paid
              </button>

              <button className="action-btn">
                ↻ Re-run Campaign
              </button>

              <button className="action-btn">
                ✔ Send Thank you Message
              </button>

              <button className="close-btn">
                ✖ Close Case
              </button>
            </div>

            {/* ===== Case Timeline ===== */}
            <div className="card timeline">
              <h4>Case Timeline & activity</h4>

              <ul>
                <li>
                  <span className="dot"></span>
                  <div>
                    <strong>Follow up schedule</strong>
                    <p>Today, 10:30 AM</p>
                  </div>
                </li>

                <li>
                  <span className="dot"></span>
                  <div>
                    <strong>Email Bounced</strong>
                    <p>Dec 11, 2025</p>
                  </div>
                </li>

                <li>
                  <span className="dot"></span>
                  <div>
                    <strong>SMS Sent</strong>
                    <p>Dec 10, 2025</p>
                  </div>
                </li>

                <li>
                  <span className="dot"></span>
                  <div>
                    <strong>Payment Due</strong>
                    <p>Dec 3, 2025</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* ===== Loan Summary ===== */}
            <div className="card">
              <h4>Loan Summary</h4>

              <div className="summary-row">
                <span>PRINCIPAL</span>
                <span>₹ 34,000</span>
              </div>

              <div className="summary-row">
                <span>INTEREST RATE</span>
                <span>12.5%</span>
              </div>

              <div className="summary-row">
                <span>TENURE</span>
                <span>24 months</span>
              </div>

              <div className="summary-row">
                <span>PAID AMOUNT</span>
                <span>₹ 0</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
