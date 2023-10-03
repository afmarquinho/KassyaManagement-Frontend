import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const InventoryRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="add-item" element={<h1>Hola Mundo</h1>} />
      </Routes>
    </Router>
  );
};

export default InventoryRoutes;
