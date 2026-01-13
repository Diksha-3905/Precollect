export default function Topbar() {
  return (
    <div className="topbar">
      {/* Left */}
      <div className="topbar-left">
        <span className="topbar-logo">Precollect</span>
      </div>

      {/* Right */}
      <div className="topbar-right">
        <div className="icon">🔍</div>
        <div className="icon">🔔</div>

        <div className="profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
}
