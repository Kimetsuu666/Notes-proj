import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useInputValue, useTextValidation } from "../../hooks/hooks";
import validators from "../../helpers/validators/validators";
import { generatorId } from "../../helpers/generatorId/generatorId";
import { addNote } from "../../store/notesActions";
import Error from "../Error/Error";
import "./AddForm.scss";

function AddForm() {
  const dispatch = useDispatch();
  const title = useInputValue("");
  const description = useInputValue("");
  const [isTitleTouched, setIsTitleTouched] = useState(false);
  const [isDescriptionTouched, setIsDescriptionTouched] = useState(false);
  const [titleErrorMessage, validateTitle, setTitleError] = useTextValidation(
    title.value,
    validators,
    isTitleTouched
  );
  const [descriptionErrorMessage, validateDescription, setDescriptionError] =
    useTextValidation(description.value, validators, isDescriptionTouched);
  const [isFormValidFromState, setIsFormValidFromState] = useState(false);
  const errorTitle = Boolean(titleErrorMessage);
  const errorDescription = Boolean(descriptionErrorMessage);

  useEffect(() => {
    if (errorTitle || errorDescription) {
      setIsFormValidFromState(false);
    } else {
      setIsFormValidFromState(true);
    }
  }, [errorTitle, errorDescription]);

  const clearForm = () => {
    title.onClear();
    description.onClear();
  };

  const handleTitleBlur = () => {
    setIsTitleTouched(true);
  };

  const handleTitleFocus = () => {
    setIsTitleTouched(false);
  };

  const handleDescriptionBlur = () => {
    setIsDescriptionTouched(true);
  };

  const handleDescriptionFocus = () => {
    setIsDescriptionTouched(false);
  };

  const onAdd = () => {
    const newNote = {
      title: title.value,
      description: description.value,
      id: generatorId(),
    };
    dispatch(addNote(newNote));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let isFormValid = false;

    if (isTitleTouched && isDescriptionTouched) {
      isFormValid = isFormValidFromState;
    } else {
      if (!isTitleTouched) {
        const { isValid } = validateTitle(title.value);
        isFormValid = isValid;

        if (!isValid) {
          setTitleError(title.value);
        }
      }

      if (!isDescriptionTouched) {
        const { isValid } = validateDescription(description.value);
        isFormValid = isValid;

        if (!isValid) {
          setDescriptionError(description.value);
        }
      }
    }

    if (isFormValid) {
      onAdd();
      clearForm();
      handleDescriptionFocus();
      handleTitleFocus();
    }
    return isFormValid;
  };

  return (
    <div className="add-form-wrapper">
      <form className="add-form" onSubmit={onSubmit}>
        <input
          onChange={title.onChange}
          onBlur={handleTitleBlur}
          onFocus={handleTitleFocus}
          value={title.value}
          type="text"
          name="title"
          placeholder="Title of note"
        />
        <Error error={errorTitle} errorText={titleErrorMessage} />
        <textarea
          onChange={description.onChange}
          onBlur={handleDescriptionBlur}
          onFocus={handleDescriptionFocus}
          value={description.value}
          name="description"
          cols="30"
          rows="10"
          placeholder="Write description..."
        />
        <Error error={errorDescription} errorText={descriptionErrorMessage} />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddForm;
