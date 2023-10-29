import styled from "styled-components";
import InventoryLayout from "../../../layout/InventoryLayout";
import { inventory } from "../../../../db/db.js";

const AllInventoryPage = () => {
  return (
    <InventoryLayout>
      <>
        <p className="text-red-600">AGREGAR EL SEARCH</p>
        <Table className="w-full text-sm">
          <thead className="bg-customDeepBlueGray text-slate-300">
            <tr className="h-7">
              <th className="text-start">Nombre</th>
              <th className="text-start">Referencia</th>
              <th className="text-start">Proveedor</th>
              <th className="text-start">Stock</th>
              <th className="text-start">Unidad</th>
              <th className="text-start">Precio Untario</th>
              <th className="text-start">Días</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr className="h-7" key={item.ref}>
                <td>{item.name}</td>
                <td>{item.ref}</td>
                <td>{item.supplier}</td>
                <td>{item.amount}</td>
                <td>{item.unit}</td>
                <td>{item.unitPrice}</td>
                <td>Días</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </InventoryLayout>
    // TODO: AGREGAR ORDENAR LAS TABLAS, ASC, DESC
    // TODO: AGREGAR BOTON DE BUSCAR
  );
};

export default AllInventoryPage;

const Table = styled.table`
  tbody tr:nth-child(even) {
    background-color: ${(props) => props.theme.softGray};
  }
`;
