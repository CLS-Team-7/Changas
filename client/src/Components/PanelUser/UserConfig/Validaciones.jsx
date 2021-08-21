export const validateAge = (value) => {
  let error;
  if (!value) {
    error = "Este campo es obligatorio";
  } else if (value < 18) {
    error = "Tenes que ser mayor de 18";
  } else if (/[0-9]{3}/.test(value)) {
    /* La edad no puede tener mas de 2 digitos */
    error = "Por favor, ingresá tu edad";
  } else if (/[a-z]/.test(value)) {
    /* Solo puede tener numeros */
    error = "Este campo sólo puede contener números";
  }
  return error;
};

export const validateDni = (value) => {
  let error;
  if (!value) {
    error = "Este campo es obligatorio";
  }
  return error;
};

export const validateAddress = (value) => {
  let error;
  if (!value) {
    error = "Este campo es obligatorio";
  }
  return error;
};

export const validatePhone = (value) => {
  let error;
  if (!value) {
    error = "Este campo es obligatorio";
  } else if (/[a-z]/.test(value)) {
    /* Solo puede tener numeros */
    error = "Este campo sólo puede contener números";
  }
  return error;
};

export const validateSummary = (value) => {
  let error;
  if (!value) {
    error = "Este campo es obligatorio";
  }
  return error;
};