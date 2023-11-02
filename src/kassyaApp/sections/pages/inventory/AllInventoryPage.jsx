import styled from "styled-components";
import InventoryLayout from "../../../layout/InventoryLayout";

const AllInventoryPage = () => {
  const inventario = [
    {
      name: "item1",
      ref: "A40-20",
      supplier: "José Jorge",
      amount: "30",
      unit: "unidad",
      unitCost: "4000",
      createdAt: "30-09-2023",
    },
    {
      name: "item2",
      ref: "A40-22",
      supplier: "José Pérez",
      amount: "100",
      unit: "unidad",
      unitCost: "3400",
      createdAt: "30-09-2023",
    },
    {
      name: "item3",
      ref: "A40-24",
      supplier: "José Pérez",
      amount: "100",
      unit: "unidad",
      unitCost: "3400",
      createdAt: "30-09-2023",
    },
    {
      name: "item4",
      ref: "A40-26",
      supplier: "José Pérez",
      amount: "100",
      unit: "unidad",
      unitCost: "3400",
      createdAt: "30-09-2023",
    },
  ];
  return (
    <InventoryLayout>
      <>
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Referencia</th>
              <th>Proveedor</th>
              <th>Cantidad</th>
              <th>Unidad</th>
              <th>Precio Unitario</th>
              <th>Días en inventario</th>
            </tr>
          </thead>
          <tbody>
            {inventario.map((item) => (
              <tr  key={item.ref}>
                <td>{item.name}</td>
                <td>{item.ref}</td>
                <td>{item.supplier}</td>
                <td>{item.amount}</td>
                <td>{item.unit}</td>
                <td>{item.unitCost}</td>
                <td>{item.createdAt}</td>
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
