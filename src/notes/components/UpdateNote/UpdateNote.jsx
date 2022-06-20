import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { getNotes } from "../../store/selectors";
import { updateNote } from "../../store/notesActions";

function UpdateNote() {
  const dispatch = useDispatch();
  const { notes } = useSelector(getNotes);
  const navigate = useNavigate();
  const noteId = useParams().id;
  const noteData = notes.find((note) => note.id === noteId);

  return (
    <div className="add-form-wrapper">
      <Formik
        initialValues={{
          title: noteData.title,
          description: noteData.description,
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .min(5, "5 is min value")
            .max(20, "20 is max value")
            .required(),
          description: Yup.string()
            .min(5, "5 is min value")
            .max(250, "250 is max value")
            .required(),
        })}
        onSubmit={(values, { resetForm }) => {
          const editedNote = {
            title: values.title,
            description: values.description,
            id: noteId,
          };
          dispatch(updateNote(editedNote));
          resetForm();
          navigate("/notes", { replace: true });
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
            Edit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default UpdateNote;
