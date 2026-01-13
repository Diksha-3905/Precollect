import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import CommunicationSetting from "./pages/CommunicationSetting";
import "./styles/app.css";

export default function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />
        <CommunicationSetting />
      </div>
    </div>
  );
}
