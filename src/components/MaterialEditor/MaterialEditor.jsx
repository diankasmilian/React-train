import { Field, Form, Formik } from 'formik';

export const MaterialEditor = ({onSubmit, isSubmitting}) => {
   const handleSubmit = (values, actions) => {
      onSubmit(values);
      actions.resetForm()
   }
  return (
    <Formik
      initialValues={{ title: '', link: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Description
          <Field name="title" />
        </label>
        <label>
          Link
          <Field name="link" type="url" />
        </label>
        <button type="submit" disabled={isSubmitting}>Add material</button>
      </Form>
    </Formik>
  );
};
