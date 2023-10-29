import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [menuAct, setMenuAct] = useState(false);

  return (
    <>
      <button onClick={(e) => setMenuAct(!menuAct)} $menuAct={menuAct} className="text-sm text-slate-300 flex items-center gap-3 pe-6">
        <span>{ menuAct ? "Cerrar" : "Menú"}</span>
        {menuAct ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-customMainColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-customMainColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
      {/* <div $menuAct={menuAct}>
        <div className="btn_group">
          <Link
            to="/"
            className={
              location.pathname === "/inventory/add-supplier" ? "active" : ""
            }
          >
            Inventarios
          </Link>
          <Link
            to="/supplier"
            className={
              location.pathname === "/inventory/add-supplier" ? "active" : ""
            }
          >
            Proveedores
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
