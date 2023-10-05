import { Route, Routes } from "react-router-dom";
import Layout from "../kassyaApp/layout/Layout";
import {
  AddItemPage,
  AddSupplierPage,
  InventoryListPage,
  SupplierListPage,
} from "../kassyaApp/sections/pages";

const AppRouter = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route>
            <Route path="/" element={<InventoryListPage />} />
            {/* //TODO CORREGIR LA RUTA*/}
            <Route path="inventory/add-item" element={<AddItemPage />} />
          </Route>
          <Route>
            <Route path="supplier/add-supplier" element={<AddSupplierPage />} />
            <Route path="supplier" element={<SupplierListPage />} />
            
          </Route>
        </Routes>
      </Layout>
    </>
  );
};

export default AppRouter;
