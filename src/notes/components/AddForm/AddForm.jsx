import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useInputValue, useTextValidation } from "../../hooks/hooks";
import validators from "../../helpers/validators/validators";
import Error from "../Error/Error";
import "./AddForm.scss";

function AddForm({ onAdd }) {
  const title = useInputValue("");
  const description = useInputValue("");
  const [isTitleTouched, setIsTitleTouched] = useState(true);
  const [isDescriptionTouched, setIsDescriptionTouched] = useState(true);
  const titleErrorMessage = useTextValidation(
    title.value,
    validators,
    isTitleTouched
  );
  const descriptionErrorMessage = useTextValidation(
    description.value,
    validators,
    isDescriptionTouched
  );
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (titleErrorMessage || descriptionErrorMessage) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [titleErrorMessage, descriptionErrorMessage]);

  const clearForm = () => {
    title.onClear();
    description.onClear();
  };

  const handleTitleBlur = () => {
    setIsTitleTouched(false);
  };

  const handleTitleFocus = () => {
    setIsTitleTouched(true);
  };

  const handleDescriptionBlur = () => {
    setIsDescriptionTouched(false);
  };

  const handleDescriptionFocus = () => {
    setIsDescriptionTouched(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onAdd(title.value, description.value);
      clearForm();
      handleDescriptionFocus();
      handleTitleFocus();
    }
  };

  const errorTitle = !isTitleTouched && titleErrorMessage;
  const errorDescription = !isDescriptionTouched && descriptionErrorMessage;
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
        <button disabled={!isFormValid} className="btn" type="submit">
          Add note
        </button>
      </form>
    </div>
  );
}

AddForm.defaultProps = {
  onAdd: PropTypes.func,
};

AddForm.propTypes = {
  onAdd: PropTypes.func,
};

export default AddForm;
