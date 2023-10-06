import styled from "styled-components";
import SupplierLayout from "../../../layout/SupplierLayout.jsx";
import { useSelector } from "react-redux";

const SupplierListPage = () => {
  const dataList = useSelector((state) => state.supplier.data);


  return (
    <SupplierLayout>
      <>
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Persona</th>
              <th>País</th>
              <th>Dirección</th>
              <th>Postal</th>
              <th>Teléfono</th>
              <th>Banco</th>
              <th>Cuenta</th>
              <th>Plazo</th>
              <th>Nombre de Contacto</th>
              <th>Número de Contacto</th>
              <th>Email de Contacto</th>
              <th>Días de Inv.</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item) => (
              <tr key={item.nif}>
                <td>{item.businessName}</td>
                <td>{item.entity}</td>
                <td>{item.country}</td>
                <td>{item.address}</td>
                <td>{item.zipCode}</td>
                <td>{item.tel}</td>
                <td>{item.bank}</td>
                <td>{item.bankingAccount}</td>
                <td>{item.paymentTerms}</td>
                <td>{item.contactName}</td>
                <td>{item.contactNumber}</td>
                <td>{item.contactEmail}</td>
                <td>Días</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </SupplierLayout>
  );
};

export default SupplierListPage;
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
