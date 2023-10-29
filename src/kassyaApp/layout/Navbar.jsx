import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuAct, setMenuAct] = useState(false);

  return (
    <>
      <button
        onClick={(e) => setMenuAct(!menuAct)}
        className="text-sm text-slate-300 flex items-center gap-3 pe-6 h-10 fixed top-0 right-0 z-50"
      >
        <span className="hidden md:block ">{menuAct ? "Cerrar" : "Menú"}</span>
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
      <div
        className={`fixed z-20 top-0 right-0 h-full w-32 pt-10 bg-customBlueGray trasition duration-500 ease-linear origin-right ${
          menuAct ? "scale-x-100" : "scale-x-0"
        }`}
      >
        <div className="btn_group">
          <Link
            to="/"
            className="w-full h-10 ps-3 text-sm text-slate-100 hover:bg-customDeepBlue flex items-center border-t border-slate-300"
            onClick={(e) => setMenuAct(false)}
          >
            Inventarios
          </Link>
          <Link
            to="/supplier"
            className="w-full h-10 ps-3 text-sm text-slate-100 hover:bg-customDeepBlue flex items-center border-t border-b border-slate-300"
            onClick={(e) => setMenuAct(false)}
          >
            Proveedores
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
