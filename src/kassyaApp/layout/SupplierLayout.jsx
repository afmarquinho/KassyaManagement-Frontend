import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { listSuppliersAsync } from "../../redux/thunks/supplierThunks";

// ?NOTA: PARA EVITAR CONSULTAR LA BBDD MUCHAS VECES, ES MEJOR CARGAR EL STATE DE LA DATA UNA VEZ AL CARGAR EL LAYOUT.

const SupplierLayout = ({ children }) => {
  const [mostrarMenu, setMostarMenu] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listSuppliersAsync());
  }, []);

  return (
    <>
      <button
        onClick={(e) => setMostarMenu(!mostrarMenu)}
        className="h-6 fixed z-10 top-2 right-40 text-sm px-5 font-semibold md:hidden bg-customMainColor text-black hover:bg-cyan-30"
      >
        Menú
      </button>

      <NAV
        $mostrarMenu={mostrarMenu}
        className="fixed z-10 top-10 h-full w-36 transition-transform duration-500 origin-left ease-linear bg-customBlueGray"
      >
        <h2 className="bg-customMainColor h-8 md:h-10 flex items-center justify-start ps-2 text-white uppercase font-bold">
          Proveedores
        </h2>
        <Link
          to="/supplier/add-supplier"
          className={`text-sm flex items-center h-10 w-full ps-2 border-b boder-slate-500 text-slate-100 ${
            location.pathname === "/supplier/add-supplier"
              ? "bg-customDeepBlueGray text-red-300"
              : ""
          }
            `}
        >
          Nuevo Proveedor
        </Link>
        <Link
          to="/supplier"
          className={`text-sm flex items-center h-10 w-full ps-2 border-b boder-slate-500 text-slate-100 ${
            location.pathname === "/supplier"
              ? "bg-customDeepBlueGray text-red-300"
              : ""
          }
            `}
        >
          Ver Todos
        </Link>
      </NAV>

      <div className="p-1 md:p-2 md:ps-40">{children}</div>
    </>
  );
};

export default SupplierLayout;

const NAV = styled.nav`
  @media (max-width: 768px) {
    transform: ${(props) => (props.$mostrarMenu ? "scaleX(1)" : "scaleX(0)")};
  }
`;
