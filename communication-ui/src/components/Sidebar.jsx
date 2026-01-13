export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="logo">Precollect</div>

        <div className="menu">
          <div className="menu-item">User Management</div>
          <div className="menu-item active">Communication Setting</div>
          <div className="menu-item">Upload Borrower List</div>
          <div className="menu-item">Accounts</div>
          <div className="menu-item">Collection Strategy</div>
          <div className="menu-item">Campaign Analytics</div>
          <div className="menu-item">Reports</div>
          <div className="menu-item">Borrower List</div>
          <div className="menu-item">Site Visit</div>
        </div>
      </div>

      <div className="sidebar-footer">
        ⚙ Setting
        <br />
        precollect@gmail.com
      </div>
    </aside>
  );
}
