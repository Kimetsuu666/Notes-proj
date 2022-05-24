import {useState, useEffect} from "react";

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

export function useTextValidation(value, validators) {
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        for (const validator of validators) {
            if(!validator.validator(value.length)) {
                setErrorMessage(validator.message)
                return
            }
        }
        setErrorMessage("")
    }, [value, validators])
    return errorMessage
}
