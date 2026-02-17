import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import BorrowerTable from "../components/BorrowerTable";

export default function BorrowerList() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />
        <BorrowerTable />
      </div>
    </div>
  );
}
