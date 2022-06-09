import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addNote } from "../../store/notesActions";
import "./AddForm.scss";

function AddForm() {
  const dispatch = useDispatch();

  return (
    <div className="add-form-wrapper">
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .min(5, "5 is min value")
            .max(250, "250 is max value")
            .required(),
          description: Yup.string()
            .min(5, "5 is min value")
            .max(250, "250 is max value")
            .required(),
        })}
        onSubmit={(values, { resetForm }) => {
          const newNote = {
            title: values.title,
            description: values.description,
            id: uuid(),
          };
          dispatch(addNote(newNote));
          resetForm();
        }}
      >
        <Form className="add-form">
          <Field
            type="text"
            id="title"
            name="title"
            placeholder="Title of note"
          />
          <ErrorMessage className="error" name="title" component="div" />
          <Field
            id="description"
            name="description"
            type="text"
            cols="30"
            rows="10"
            placeholder="Write description..."
            as="textarea"
          />
          <ErrorMessage className="error" name="description" component="div" />
          <button className="btn" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddForm;
