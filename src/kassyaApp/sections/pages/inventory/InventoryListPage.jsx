import styled from "styled-components";
import InventoryLayout from "../../../layout/InventoryLayout";
import { inventory } from "../../../../db/db.js";


const AllInventoryPage = () => {
  return (
    <InventoryLayout>
      <>
      <Table>
          <thead>

         
            <tr>
              <th>Nombre</th>
              <th>Referencia</th>
              <th>Proveedor</th>
              <th>Stock</th>
              <th>Unidad</th>
              <th>Precio Untario</th>
              <th>Días</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.ref}>
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
  width: 100%;
  font-size: 1.2rem;
  thead {
    background-color: ${(props) => props.theme.deepGray};
    color: ${(props) => props.theme.secondaryText};
  }
  tbody tr:nth-child(even) {
    background-color: ${(props) => props.theme.softGray};
  }
`;
