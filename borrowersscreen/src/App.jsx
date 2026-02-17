import { BrowserRouter, Routes, Route } from "react-router-dom";
import BorrowerList from "./pages/BorrowerList.jsx";
import BorrowerDetails from "./pages/BorrowerDetails.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BorrowerList />} />
        <Route path="/case/:id" element={<BorrowerDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
