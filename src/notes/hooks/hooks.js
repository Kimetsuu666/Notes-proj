import { useState } from "react";

function useInputValue(startValue) {
  const [value, setValue] = useState(startValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange };
}

export default useInputValue;
