import { Route, Routes } from "react-router-dom";
import Layout from "../kassyaApp/layout/Layout";
import {
  AddItemPage,
  AddSupplierPage,
  AllInventoryPage,
} from "../kassyaApp/sections/pages";

const AppRouter = () => {
  return (
    <>
  
        <Layout>
          <Routes>
            <Route>
              <Route path="/" element={<AllInventoryPage />} />
              {/* //TODO CORREGIR LA RUTA*/}
              <Route path="/inventory/add-item" element={<AddItemPage />} />
              <Route
                path="/inventory/add-supplier"
                element={<AddSupplierPage />}
              />
            </Route>
          </Routes>
        </Layout>
     
    </>
  );
};

export default AppRouter;
