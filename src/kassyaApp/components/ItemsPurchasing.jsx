import { useSelector } from "react-redux";

const ItemsPurchasing = ({ item }) => {
  const suppliers = useSelector((state) => state.supplier.data);

  const findSupplier = (id, array) => {
    const supplierName = array.find((obj) => obj._id === id);
    return supplierName.businessName;
  };
  //TODO: Definir como voy a administrar los comentarios, si es uno editable o uno que va adicionando comentarios
  return (
    <div className="w-full mb-5 p-2 border">
      <div className="w-full ">
        <span className="font-bold">Nombre: </span>
        <span className="uppercase italic">{item.name}</span>
      </div>
      <div className="w-full flex-col sm:flex-row gap-2">
        <div className="w-1/2">
          <span className="font-bold">Referencia: </span>
          {item.ref}
        </div>
        <div className="w-1/2">
          <span className="font-bold">Proveedor: </span>
          {findSupplier(item.supplier, suppliers)}
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-2 ">
        <div className="w-1/2">
          <span className="font-bold">Área de la requisicón: </span>
          {item.department}
        </div>
        <div className="w-1/2">
          <span className="font-bold">Unidad: </span>
          {item.unit}
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-2">
        <div className="w-1/2">
          <span className="font-bold">Cantidad: </span>
          {item.amount.toLocaleString()}
        </div>
        <div className="w-1/2">
          <span className="font-bold">Costo Unitario: </span>
          {`$ ${item.unitCost.toLocaleString()}`}
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-2 ">
        <div className="w-1/2">
          {" "}
          <span className="font-bold">Subtotal: </span>
          {`$ ${item.subTotal.toLocaleString()}`}
        </div>
        <div className="w-1/2 flex flex-col sm:flex-row justify-between">
          <div>
            <span className="font-bold">Ubicación: </span>
            {item.localization}
          </div>
          <div>
            <span>Actualizar: </span>{" "}
            <button className="w-24 p-1 text-green-500 font-bold">
              En Bodega
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <p className="text-sm italic text-red-400">{item.itemComments}</p>
        <div className="w-full flex justify-end">
          <button className="text-xs italic"> + Comentario</button>
        </div>
      </div>
    </div>
  );
};

export default ItemsPurchasing;
