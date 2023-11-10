import { useSelector } from "react-redux";
import { PurchasingLayout } from "../../../layout";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PurchasingListPage = () => {
  const data = useSelector((state) => state.purchasing.data);

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(date).toLocaleDateString("es-ES", options);
  };

  return (
    <PurchasingLayout>
      <Table className="w-full text-xs">
        <thead className="bg-customDeepBlueGray text-slate-300">
          <tr>
            <th className="text-start ps-2"></th>
            <th className="text-start ps-2">Órden</th>
            <th className="text-start ps-2">Status</th>
            <th className="text-start ps-2">Pago</th>
            <th className="text-start ps-2">Valor</th>
            <th className="text-start ps-2">Comentarios</th>
            <th className="text-start ps-2">Creación</th>
            <th className="text-start ps-2"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((order, index) => (
            <tr className="" key={index}>
              <td className="py-1 w-10 text-center">{index + 1}</td>
              <td className="w-20">{order.orderNumber}</td>
              <td className="ps-2 w-20">{order.status}</td>
              <td className="ps-2 w-28">{order.paymentMethod}</td>
              <td className="ps-2 w-28">{order.total}</td>
              <td className="w-60 ps-2">{order.comments}</td>
              <td className="w-20 ps-2">{formatDate(order.createdAt)}</td>
              <td className="">
                <Link to={`/purchasing/${order._id}`} className="text-blue-600"> + info</Link>
              </td> 
            </tr>
          ))}
        </tbody>
      </Table>
    </PurchasingLayout>
  );
};

export default PurchasingListPage;

const Table = styled.table`
  tbody tr:nth-child(even) {
    background-color: ${(props) => props.theme.softGray};
  }
`;
