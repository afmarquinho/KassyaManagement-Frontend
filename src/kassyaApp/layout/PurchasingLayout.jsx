import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  countAsync,
  listPurchasingAsync,
} from "../../redux/thunks/purchasingThunks";
import { listSuppliersAsync } from "../../redux/thunks/supplierThunks";

const PurchasingLayout = ({ children }) => {
  const [mostrarMenu, setMostarMenu] = useState(false);
  const data = useSelector((state) => state.purchasing.data);
  const count = useSelector((state) => state.purchasing.count);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listPurchasingAsync());
    dispatch(countAsync());
    //? es necesario hacer la solicitud de provedores al bacen para llenar el status, de lo contrario se tendría que abrir siempre el modulo de proveedores para llenar el state
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
          Compras
        </h2>
        <Link
          to="/purchasing"
          className={`text-sm flex items-center h-10 w-full ps-2 border-b boder-slate-500 text-slate-100 ${
            location.pathname === "/purchasing"
              ? "bg-customDeepBlueGray text-red-300"
              : ""
          }
            `}
        >
          Ver Pedidos
        </Link>
        <Link
          to="/purchasing/new"
          className={`text-sm flex items-center h-10 w-full ps-2 border-b boder-slate-500 text-slate-100 ${
            location.pathname === "/purchasing/new"
              ? "bg-customDeepBlueGray text-red-300"
              : ""
          }
            `}
        >
          Nuevo Pedido
        </Link>
      </NAV>

      <div className="p-1 md:p-2 md:ps-40">{children}</div>
    </>
  );
};

export default PurchasingLayout;

const NAV = styled.nav`
  @media (max-width: 768px) {
    transform: ${(props) => (props.$mostrarMenu ? "scaleX(1)" : "scaleX(0)")};
  }
`;
