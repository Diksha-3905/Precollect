import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        Precollect
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <a href="#">User Management</a>
        <a href="#">Communication Setting</a>
        <a href="#">Upload Borrower List</a>
        <a href="#">Accounts</a>
        <a href="#">Collection Strategy</a>
        <a href="#">Campaign Analytics</a>
        <a href="#">Reports</a>

        <a href="#" className="active">
          Borrower List
        </a>

        <a href="#">Site Visit</a>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <span className="email">precollect@gmail.com</span>
      </div>
    </aside>
  );
}
