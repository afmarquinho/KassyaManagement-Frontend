import { useNavigate, useParams } from "react-router-dom";
import SupplierLayout from "../../../layout/SupplierLayout";
import { useEffect, useState } from "react";
import { getOneSuppilerAsync } from "../../../../redux/thunks/supplierThunks";
import { useDispatch, useSelector } from "react-redux";
import { ModalDeleteSupplier, ModalEditSupplier } from "../../../modals";

const SupplierViewPage = () => {
  const supplier = useSelector((state) => state.supplier.oneSupplier);
  const [actModalEditar, setActModalEditar] = useState(false);
  const [actModalDelete, setActModalDelete] = useState(false);
  const navigate = useNavigate();

  const params = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneSuppilerAsync(params.id));
  }, []);
  useEffect(() => {
    dispatch(getOneSuppilerAsync(params.id));
  }, [supplier]);

  const abrirModal = () => {
    setActModalEditar(true);
  };

  const goBack = () => {
    navigate("/supplier")
  };

  return (
    <SupplierLayout>
      <>
        <div className="flex justify-between items-center mb-3">
          {actModalDelete && (
            <ModalDeleteSupplier
              setActModalDelete={setActModalDelete}
              mensaje={"Realmente deseas eliminar el proveedor:"}
              nombre={supplier.businessName}
            />
          )}

          {actModalEditar && (
            <ModalEditSupplier
              supplier={supplier}
              activeModal={actModalEditar}
              setActiveModal={setActModalEditar}
            />
          )}
          <div className="flex gap-3">
            <button
              className="px-3 py-1 w-28 flex items-center gap-1 text-white font-medium bg-green-600 hover:bg-green-500"
              onClick={abrirModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Editar
            </button>
            <button
              className="px-3 py-1 w-28 flex items-center gap-1 text-white font-medium bg-red-600 hover:bg-red-500"
              onClick={(e) => setActModalDelete(true)}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              Eliminar
            </button>
          </div>
          <button
            className="flex justify-center items-center gap-1 me-5"
            onClick={goBack}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
            Atrás
          </button>
        </div>

        <div>
          <table className="w-11/12 bg-white text-sm m-auto">
            <caption className="bg-customDeepBlue w-full text-white py-2 font-semibold text-lg uppercase">
              {supplier.businessName}
            </caption>
            <tbody>
              <tr>
                <td className="text-start py-2 font-bold">ID/NIT</td>
                <td className="text-start py-2">{supplier.nif}</td>
                <td className="text-start py-2 font-bold">Persona</td>
                <td className="text-start py-2">{supplier.entity}</td>
                <td className="text-start py-2 font-bold">País</td>
                <td className="text-start py-2">{supplier.country}</td>
                <td className="text-start py-2 font-bold">Ciudad</td>
                <td className="text-start py-2">{supplier.city}</td>
              </tr>
              <tr>
                <td className="text-start py-2 font-bold">Dirección</td>
                <td className="text-start py-2">{supplier.address}</td>
                <td className="text-start py-2 font-bold">Código Postal</td>
                <td className="text-start py-2">{supplier.zipCode}</td>
                <td className="text-start py-2 font-bold">Teléfono</td>
                <td className="text-start py-2">{supplier.tel}</td>
                <td className="text-start py-2 font-bold">Sitio Web</td>
                <td className="text-start py-2">{supplier.webSite}</td>
              </tr>

              <tr className="bg-customBackground text-black w-full">
                <th colSpan="8" className="py-2">
                  Información Bancaria
                </th>
              </tr>

              <tr>
                <td className="text-start py-2 font-bold">Banco</td>
                <td className="text-start py-2">{supplier.bank}</td>
                <td className="text-start py-2 font-bold">N° de Cuenta</td>
                <td className="text-start py-2">{supplier.bankingAccount}</td>
                <td className="text-start py-2 font-bold">Plazo de Pago</td>
                <td className="text-start py-2">
                  {supplier.paymentTerms} días
                </td>
                <td className="text-start py-2 font-bold"></td>
                <td className="text-start py-2"></td>
              </tr>

              <tr className="bg-customBackground text-black w-full">
                <th colSpan="8" className="py-2">
                  Datos de Contacto
                </th>
              </tr>

              <tr>
                <td className="text-start py-2 font-bold">Nombre</td>
                <td className="text-start py-2">{supplier.contactName}</td>
                <td className="text-start py-2 font-bold">Teléfono</td>
                <td className="text-start py-2">{supplier.contactNumber}</td>
                <td className="text-start py-2 font-bold">E-mail</td>
                <td className="text-start py-2">{supplier.contactEmail}</td>
                <td className="text-start py-2 font-bold"></td>
                <td className="text-start py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    </SupplierLayout>
  );
};

export default SupplierViewPage;


