import styled from "styled-components";

const TableListOrder = ({ setActModal, setSelectedItem, items, setActModalDelete }) => {
  const onCreate = () => {
    setActModal(true);
    setSelectedItem("");
  };

  const onEdit = (item) => {
    setSelectedItem(item);
    setActModal(true);
  };

  const onDelete = (item) => {
    setSelectedItem(item);
    setActModalDelete(true);
  };

  return (
    <Table className="w-full text-sm text-start mt-5">
      <caption className="text-start font-bold italic bg-customBlueGray text-white">
        Items de la Órden
      </caption>
      <caption>
        <div className="flex">
          <button
            className="text-sm flex gap-1 w-40 py-2 items-center justify-start font-bold"
            onClick={onCreate}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Agregar
          </button>
        </div>
      </caption>
      <thead>
        <tr>
          <th className="text-start">Nombre</th>
          <th className="text-start">Referencia</th>
          <th className="text-start">Proveedor</th>
          <th className="text-start">Cantiadad</th>
          <th className="text-start">Unidad</th>
          <th className="text-start">Costo Unitario</th>
          <th className="text-start">Subtotal</th>
          <th className="text-start">Departamento</th>
          <th className="text-start"></th>
          <th className="text-start"></th>
          <th className="text-start"></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.ref}>
            <td>{item.name}</td>
            <td>{item.ref}</td>
            <td>{item.supplier}</td>
            <td>{item.amount.toLocaleString()}</td>
            <td>{item.unit.toLocaleString()}</td>
            <td>{`$ ${item.unitCost.toLocaleString()}`}</td>
            <td>{`$ ${item.subTotal.toLocaleString()}`}</td>
            <td>{item.department}</td>
            <td>
              <button
                className="text-xs text-blue-600 font-bold"
                onClick={() => onEdit(item)}
              >
                Editar
              </button>
            </td>
            <td>
              <button
                className="text-xs text-red-600 font-bold"
                onClick={() => onDelete(item)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableListOrder;

const Table = styled.table`
  tbody tr:nth-child(even) {
    background-color: ${(props) => props.theme.softGray};
  }
`;
