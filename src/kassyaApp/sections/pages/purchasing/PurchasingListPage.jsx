import { useSelector } from "react-redux";
import { PurchasingLayout } from "../../../layout";
import styled from "styled-components";

const PurchasingListPage = () => {
    const data = useSelector((state) => state.purchasing.data);

  return (
    <PurchasingLayout>
      <Table className="w-full text-xs">
        <thead className="bg-customDeepBlueGray text-slate-300">
          <tr>
            <th className="text-start ps-2"></th>
            <th className="text-start ps-2">Órden</th>
            <th className="text-start ps-2">Status</th>
            <th className="text-start p-2"> Pago</th>
            <th className="text-start p-2">Creación</th>
            <th className="text-start p-2">Actualizada</th>
            <th className="text-start p-2">Comentarios</th>
            <th className="text-start ps-2">Precio Unitario</th>
            <th className="text-start ps-2">Total</th>
            <th className="text-start ps-2"></th>
          </tr>
        </thead>
        <tbody>
        {data.map((order, index) => (
                <tr className="" key={index}>
                  <td className="py-8">{index + 1}</td>
                  <td className="">{order.orderNumber}</td>
                  <td className="ps-2">{order.status}</td>
                  <td className="ps-2">{order.paymentMethod}</td>
                  <td className="w-20 ps-2">{order.createdAt}</td>
                  <td className="w-20 ps-2">{order.updatedAt}</td>
                  <td className="w-60 ps-2">{order.comments}</td>
                  <td>{order.createdAt}</td>
                  <td></td>
                  <td>+ info</td>
                </tr>
              ))}
        </tbody>
      </Table>
    </PurchasingLayout>
  );
};

export default PurchasingListPage

const Table = styled.table`
  tbody tr:nth-child(even) {
    background-color: ${(props) => props.theme.softGray};
  }
`;
