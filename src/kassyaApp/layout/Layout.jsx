import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="mask h-10">
        <div className="bg-customDeepBlue flex items-center justify-between h-10 fixed top-0 w-full z-10">
          <div className="flex items-center gap-3">
            <h1>Kassya Management</h1>
            <span className="text-slate-300 text-sm hidden md:block">
              Signed in as:{" "}
              <span className="text-customMainColor">Mark Otto</span>
            </span>
          </div>
          <Navbar />
        </div>
      </div>

      <div>{children}</div>
    </>
  );
};

export default Layout;
