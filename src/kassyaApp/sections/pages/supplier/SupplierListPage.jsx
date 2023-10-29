import styled from "styled-components";
import SupplierLayout from "../../../layout/SupplierLayout.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchSupplier from "../../../components/SearchSupplier.jsx";
import { useEffect } from "react";

const SupplierListPage = () => {
  const dataList = useSelector((state) => state.supplier.data);
  const searchTerm = useSelector((state) => state.supplier.searchTerm);

  const filteredSuppliers = useSelector((state) =>
    state.supplier.data.filter((supplier) =>
      supplier.businessName.match(new RegExp(searchTerm, "i"))
    )
  );

  

  return (
    <SupplierLayout>
      <>
        <div>
          <div>
            <SearchSupplier />
          </div>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>País</th>
                  <th>Teléfono</th>
                  <th>Banco</th>
                  <th>Cuenta</th>
                  <th>Plazo</th>
                  <th></th>
                </tr>
              </thead>
              {searchTerm === "" ? <tbody>
                  {dataList.map((item) => (
                    <tr key={item.nif}>
                      <td>{item.businessName}</td>
                      <td>{item.country}</td>
                      <td>{item.tel}</td>
                      <td>{item.bank}</td>
                      <td>{item.bankingAccount}</td>
                      <td>{item.paymentTerms}</td>
                      <td>
                        {<Link to={`/supplier/${item._id}`}>ver mas</Link>}
                      </td>
                    </tr>
                  ))}
                </tbody> : Object.keys(filteredSuppliers).length > 0 ? (
                <tbody>
                  {filteredSuppliers.map((item) => (
                    <tr key={item.nif}>
                      <td>{item.businessName}</td>
                      <td>{item.country}</td>
                      <td>{item.tel}</td>
                      <td>{item.bank}</td>
                      <td>{item.bankingAccount}</td>
                      <td>{item.paymentTerms}</td>
                      <td>
                        {<Link to={`/supplier/${item._id}`}>ver mas</Link>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <h5>No hay coincidencias con su búsqueda</h5>
              )}
            </Table>
          </div>
        </div>
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
  td,
  th {
    padding-left: 0.5rem;
  }
`;
