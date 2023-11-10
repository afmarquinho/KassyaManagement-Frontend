//? Esta funcion devuelve true si hay al menos una referncia gudardada con el dato que voy a ingresar
export const noRepetReference = (ref, array) => {
    return array.some(item => item.ref === ref);
  };

