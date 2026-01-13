export default function App() {
  return (
    <div className="page">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">PreSecure AI</h2>

        <ul className="menu">
          <li>Home</li>
          <li>Platform</li>
          <li>Solutions</li>
          <li className="active">Contact Us</li>
          <li>Why Us</li>
        </ul>

        <div className="nav-btns">
          <button className="btn-outline">Signup</button>
          <button className="btn">Request a Demo</button>
        </div>
      </nav>

      {/* Main Section */}
      <div className="container">

        {/* LEFT */}
        <div className="left">
          <div className="card">
            <h2>
              Let’s Transform Your <br /> Recovery Operations
            </h2>

            {/* IMAGE */}
            <img
              src="/C:\Users\waghd\contact-from\src\assets\phone.pngphone.png"
              alt="phone"
              className="phone-img"
            />
          </div>

          <h3>Get in Touch</h3>
          <p><b>Email:</b> contact@presecureai.com</p>
          <p><b>Phone:</b> +91 98231 32466</p>
          <p><b>Address:</b> Pune, Maharashtra</p>
        </div>

        {/* RIGHT */}
        <div className="right">
          <h3>Contact Form</h3>
          <p className="desc">
            Reach out for demos, integrations, partnerships or custom deployment.
          </p>

          <form>
            <input placeholder="Full Name" />
            <input placeholder="Company Name" />
            <input type="email" placeholder="Work Email" />
            <input type="number" placeholder="Phone Number" />
            <input placeholder="What are you looking for?" />
            <textarea placeholder="Message Box" />
            <button className="submit">Submit Request</button>
          </form>
        </div>

      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">

          <div>
            <h4 className="footer-title">PreSecure AI</h4>
            <p className="footer-text">
              Secure. Intelligent. Reliable.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Company</h4>
            <p className="footer-link">About</p>
            <p className="footer-link">Contact Us</p>
          </div>

          <div>
            <h4 className="footer-title">Products</h4>
            <p className="footer-link">PreHire</p>
            <p className="footer-link">PreSecure</p>
            <p className="footer-link">PreSchedule</p>
          </div>

          <div>
            <h4 className="footer-title">Legal</h4>
            <p className="footer-link">Privacy Policy</p>
            <p className="footer-link">Terms of Service</p>
            <p className="footer-link">Security</p>
          </div>

        </div>

        <p className="copy">
          © 2025 PreSecure AI. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
