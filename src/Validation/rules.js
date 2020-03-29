import * as ErrorMessages from './errorMessages.js';

export const required = (text) => {
  if (text) {
    return null;
  } else {
    return ErrorMessages.isRequired;
  }
};

export const mustMatch = (field, fieldName) => {
  return (text, state) => {
    return state[field] === text ? null : ErrorMessages.mustMatch(fieldName);
  };
};

export const minLength = (length) => {
  return (text) => {
    return text.length >= length ? null : ErrorMessages.minLength(length);
  };
};

export const maxLength = (length) => {
  return (text) => {
    return text.length <= length ? null : ErrorMessages.maxLength(length);
  };
};

export const isEmail = (text) => {
  const patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    return patternEmail.test(text) ? null : ErrorMessages.isEmail;
};

export const isPhone = (text) => {
  const patternPhone = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g;
    return patternPhone.test(text) ? null : ErrorMessages.isPhone;
};

export const isNumber = (text) => {
  const patternNumber = /^[0-9]*$/g;
    return patternNumber.test(text) ? null : ErrorMessages.isNumber;
};

export const isText = (text) => {
  const patternNumber = /^[a-zA-Z ]*$/g;
    return patternNumber.test(text) ? null : ErrorMessages.isText;
};


