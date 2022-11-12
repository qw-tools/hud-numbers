export const numberType = (_default) => anyType(Number, _default);
export const stringType = (_default) => anyType(String, _default);
export const arrayType = (_default) => anyType(Array, _default);
export const anyType = (type, _default) => ({ type, default: _default });

export default {
  number: numberType,
  string: stringType,
  array: arrayType,
  any: anyType,
};
