
export const isRequired = fieldName => `${fieldName} tidak boleh kosong`;

export const mustMatch = otherFieldName => {
  return (fieldName) => `${fieldName} tidak sama dengan ${otherFieldName}`;
};

export const minLength = length => {
  return (fieldName) => `${fieldName} minimal ${length} karakter`;
};

export const maxLength = length => {
  return (fieldName) => `${fieldName} maksimal ${length} karakter`;
};

export const isEmail = fieldName => `${fieldName} format Salah`;
export const isPhone = fieldName => `${fieldName} format Salah`;
export const isNumber = fieldName => `${fieldName} Hanya boleh diisi angka`;
export const isText = fieldName => `${fieldName} Hanya boleh diisi Huruf`;


