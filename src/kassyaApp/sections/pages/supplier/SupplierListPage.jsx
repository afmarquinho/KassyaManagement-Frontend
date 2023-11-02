import styled from "styled-components";
import SupplierLayout from "../../../layout/SupplierLayout.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchSupplier from "../../../components/SearchSupplier.jsx";
import { useEffect } from "react";

const SupplierListPage = () => {
  let i = 0;
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
            <Table className="w-full text-sm">
              <thead className="bg-customDeepBlueGray text-slate-300">
                <tr className="h-7">
                  <th className="text-start"></th>
                  <th className="text-start">Nombre</th>
                  <th className="text-start">País</th>
                  <th className="text-start">Teléfono</th>
                  <th className="text-start">Banco</th>
                  <th className="text-start">Cuenta</th>
                  <th className="text-start">Plazo</th>
                  <th></th>
                </tr>
              </thead>
              {searchTerm === "" ? (
                <tbody>
                  {dataList.map((item, index) => (
                    <tr className="h-7" key={item.nif}>
                      <td>{index + 1}</td>
                      <td className="w-32">{item.businessName}</td>
                      <td>{item.country}</td>
                      <td>{item.tel}</td>
                      <td>{item.bank}</td>
                      <td>{item.bankingAccount}</td>
                      <td>{item.paymentTerms}</td>
                      <td>
                        {<Link  className="text-blue-700" to={`/supplier/${item._id}`}>Ver mas</Link>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : Object.keys(filteredSuppliers).length > 0 ? (
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
                        {
                          <Link
                            className="text-blue-700"
                            to={`/supplier/${item._id}`}
                          >
                            Ver mas
                          </Link>
                        }
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
  tbody tr:nth-child(even) {
    background-color: ${(props) => props.theme.softGray};
  }
`;
