import "../styles/topbar.css";

export default function Topbar() {
  return (
    <header className="topbar">
      {/* Left */}
      <div className="topbar-left">
        <span className="brand">Precollect</span>
      </div>

      {/* Right */}
      <div className="topbar-right">
        <button className="icon-btn" title="Search">🔍</button>
        <button className="icon-btn" title="Notifications">🔔</button>

        <div className="profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
          />
        </div>
      </div>
    </header>
  );
}
