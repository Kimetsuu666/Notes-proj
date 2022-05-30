const validators = [
  { message: "5 is min value", validator: (value) => +value.length >= 5 },
  { message: "250 is max value", validator: (value) => +value.length <= 250 },
];

export default validators;
