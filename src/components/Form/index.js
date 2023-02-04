import React from "react";
import "./form.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTodo } from "../../context/TodoContext";
import { v4 as uuidv4 } from "uuid";
const Form = () => {
  const validationSchema = Yup.object({
    task: Yup.string().required("Zorunlu Doldurulması Gerekli Alan"),
  });
  const { tasks, setTasks } = useTodo();

  const onSubmit = (values) => {
    const data = {
      ...values,
      completed: false,
      id: uuidv4(),
    };

    setTasks([data, ...tasks]);
  };

  return (
    <Formik
      initialValues={{ task: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleSubmit, errors, setFieldTouched }) => (
        <div className="form-main">
          <form className="form-container" onSubmit={handleSubmit}>
            <input
              type="text"
              name="task"
              placeholder="Enter a task"
              onChange={handleChange}
              values={values.task}
              onBlur={() => setFieldTouched("text")}
            />
            <button type="submit">+</button>
          </form>
          <p>{errors.task}</p>
        </div>
      )}
    </Formik>
  );
};

export default Form;
