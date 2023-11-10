export const hasNonEmptyValues = (obj) => {
  for (let key in obj) {
    if (obj[key] === "") {
      return false;
    }
  }
  return true;
};

export const dataValidation = (datos) => {
  const propiedades = Object.keys(datos);

  for (const propiedad of propiedades) {
    if (datos[propiedad] === "") {
      return `método de pago y comentarios no puede estar vacío.`;
    }
  }

  return null;
};
