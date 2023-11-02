
const Alerta = ({ status, msg }) => {
  return (
    <div className="py-1">
      <p
        className={`text-md text-center text-white ${
          status === "warning"
            ? "bg-orange-500"
            : status === "error"
            ? "bg-red-500"
            : "bg-blue-500"
        }`}
      >
        {msg}
      </p>
    </div>
  );
};

export default Alerta;
