const validators = [
    {message: "5 is min value", validator: (value) => +value >= 5},
    {message: "250 is max value", validator: (value) => +value <= 250},
]

export default validators;