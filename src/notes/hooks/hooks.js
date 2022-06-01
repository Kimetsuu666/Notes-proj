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

  useEffect(() => {
    if (isTouched) {
      for (const validator of validators) {
        if (!validator.validator(value)) {
          setErrorMessage(validator.message);
          return;
        }
      }
    } else {
      setErrorMessage("");
    }
  }, [value, validators, isTouched]);

  return errorMessage;
}
