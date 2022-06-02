const validators = [
  { errorMessage: "5 is min value", validator: (value) => +value.length >= 5 },
  {
    errorMessage: "250 is max value",
    validator: (value) => +value.length <= 250,
  },
];

export default validators;
