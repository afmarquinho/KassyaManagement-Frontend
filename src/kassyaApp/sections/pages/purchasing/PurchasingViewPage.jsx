import { useParams } from "react-router-dom";
import { PurchasingLayout } from "../../../layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderAsync } from "../../../../redux/thunks/purchasingThunks";

const PurchasingViewPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const order = useSelector((state) => state.purchasing.order);

  useEffect(() => {
    dispatch(getOrderAsync(params.id));

  }, [order]);
  return (
    <PurchasingLayout>
      <>
      <h3>{order.name}</h3>
      </>
    </PurchasingLayout>
  );
};

export default PurchasingViewPage;
