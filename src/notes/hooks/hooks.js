import { useState, useEffect } from "react";

export function useInputValue(startValue) {
  const [value, setValue] = useState(startValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClear = () => {
    setValue("");
  };

  return { value, onChange, onClear };
}

export function useTextValidation(value, validators, isTouched) {
  const [errorMessage, setErrorMessage] = useState("");
  const validate = (valueParameter) => {
    for (const validator of validators) {
      if (!validator.validator(valueParameter)) {
        return {
          isValid: false,
          errorMessageFromValidator: validator.errorMessage,
        };
      }
    }
    return { isValid: true };
  };

  const setError = (valueParameter) => {
    const { isValid, errorMessageFromValidator } = validate(valueParameter);

    if (isValid) {
      setErrorMessage("");
    } else {
      setErrorMessage(errorMessageFromValidator);
    }
  };

  useEffect(() => {
    if (isTouched) {
      setError(value);
    } else {
      setErrorMessage("");
    }
  }, [value, validators, isTouched]);

  return [
    errorMessage,
    (valueParameter) => validate(valueParameter || value),
    (valueParameter) => setError(valueParameter || value),
  ];
}
