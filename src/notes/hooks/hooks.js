import {useState} from "react";

export function useInputValue(startValue) {
    const [value, setValue] = useState(startValue);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onClear = () => {
        setValue("")
    }

    return {value, onChange, onClear}
}