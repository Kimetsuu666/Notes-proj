import {useInputValue, useTextValidation} from "../../hooks/hooks";
import validators from "../../helpers/validators/validators";
import "./AddForm.scss"
import {useEffect, useState} from "react";

const AddForm = ({onAdd}) => {
    const title = useInputValue("")
    const description = useInputValue("")
    const titleValidator = useTextValidation(title.value, validators)
    const descriptionValidator = useTextValidation(description.value, validators)
    const [isTitleTouched, setIsTitleTouched] = useState(false)
    const [isDescriptionTouched, setIsDescriptionTouched] = useState(false)
    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        if (titleValidator || descriptionValidator) {
            setIsFormValid(false)
        } else {
            setIsFormValid(true)
        }
    }, [titleValidator, descriptionValidator])

    const clearForm = () => {
        title.onClear()
        description.onClear()
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!titleValidator && !descriptionValidator) {
            onAdd(title.value, description.value);
            clearForm();
            setIsTitleTouched(false)
            setIsDescriptionTouched(false)
            console.log("form")
        } else {
            clearForm()
            setIsTitleTouched(true)
            setIsDescriptionTouched(true)
            console.log("Errorform")
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "title":
                setIsTitleTouched(true)
                console.log("blur")
                break
            case "description":
                setIsDescriptionTouched(true)
                console.log("blur")
                break
        }
    }

    const focusHandler = (e) => {
        switch (e.target.name) {
            case "title":
                setIsTitleTouched(false)
                console.log("blur")
                break
            case "description":
                setIsDescriptionTouched(false)
                console.log("blur")
                break
        }
    }

    const errorTitle = isTitleTouched && titleValidator && <Error error={titleValidator}/>
        ? <Error error={titleValidator}/>
        : null
    const errorDescription = isDescriptionTouched && descriptionValidator && <Error error={descriptionValidator}/>
        ? <Error error={descriptionValidator}/>
        : null
    return (
            <div className="add-form-wrapper">
                <form className="add-form" onSubmit={onSubmit}>
                    <input
                        onChange={title.onChange}
                        onBlur={blurHandler}
                        onFocus={focusHandler}
                        value={title.value}
                        type="text"
                        name="title"
                        placeholder="Title of note"/>
                    {errorTitle}
                    <textarea
                        onChange={description.onChange}
                        onBlur={blurHandler}
                        onFocus={focusHandler}
                        value={description.value}
                        name="description"
                        cols="30"
                        rows="10"
                        placeholder="Write description..."/>
                    {errorDescription}
                    <button
                        disabled={!isFormValid}
                        className="btn"
                        type="submit">Add note</button>
                </form>
            </div>
        )
    }

    const Error = ({error}) => {
    return (
        error ? <div className="error">{error}</div> : null
    )
    }

export default AddForm;