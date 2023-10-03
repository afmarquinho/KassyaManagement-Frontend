import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../kassyaApp/layout/Layout";
import { AddItemPage, AddSupplierPage, AllInventoryPage } from "../kassyaApp/sections/pages";

const AppRouter = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<AllInventoryPage />} />
            {/* //TODO CORREGIR LA RUTA*/}
            <Route path="/inventory/add-item" element={<AddItemPage />} />
            <Route path="/inventory/add-supplier" element={<AddSupplierPage />} />
          </Route>
        </Routes>
      </Router>
    </Layout>
  );
};

export default AppRouter;
