import "../styles/table.css";
import StatusBadge from "./StatusBadge";
import { useNavigate } from "react-router-dom";

export default function BorrowerTable() {
  const navigate = useNavigate();

  return (
    <main className="content">
      <h1>All borrower Case</h1>
      <p className="subtitle">
        View and manage all borrower accounts and their status
      </p>

      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Loan Amount</th>
            <th>Phone / Email</th>
            <th>Status</th>
            <th>Next Due</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Riya Arora</td>
            <td>₹ 34,000</td>
            <td>
              +91 8604907281
              <br />
              riya@gmail.com
            </td>
            <td>
              <StatusBadge status="Pending" />
            </td>
            <td>Jan 1, 2026</td>
            <td>
              <button onClick={() => navigate("/case/1")}>
                Open Case
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
