import { Form, Formik, FormikHelpers } from 'formik';
import { TextArea } from '../../../shared/components/TextArea/TextArea';
import { TextInput } from '../../../shared/components/TextInput/TextInput';
import * as Yup from 'yup';

interface Values {
  title: string;
  category: string;
  length: string;
  instructor: string;
  videoUrl: string;
  description: string;
}

export const CreateTrainingPage = () => {
  const initialValues = {
    title: '',
    category: '',
    length: '',
    instructor: '',
    videoUrl: '',
    description: '',
  };
  const onSubmit = (values: Values) => {
    console.log({createTrainingForm: values})
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .max(80, 'El máximo permitido es de 80')
      .required('Este campo es requerido'),
    category: Yup.string()
      .max(30, 'El máximo permitido es de 30')
      .required('Este campo es requerido'),
    length: Yup.number().required('Este campo es requerido'),
    instructor: Yup.string()
      .max(50, 'El máximo permitido es de 50')
      .required('Este campo es requerido'),
    videoUrl: Yup.string()
      .required('Este campo es requerido')
      .url('Debe ser una url válida'),
    description: Yup.string()
      .max(100, 'El máximo permitido es de 100')
      .required('Este campo es requerido'),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <div className="row d-flex justify-content-between">
              
              <h2 className="col-auto" style={{marginBottom: 0}}>Create Training</h2>
              <button type="submit" disabled={!formik.isValid} className="btn btn-primary col-1 rounded">
                Save
              </button>
            </div>
            <div className="container-fluid">
              <TextInput
                id="title"
                name="title"
                label="Title"
                placeholder="Intro to power app virtuals"
              />

              <TextInput
                id="category"
                name="category"
                label="Category"
                placeholder="Power platform"
              />

              <TextInput id="length" name="length" label="Length" />

              <TextInput
                id="instructor"
                name="instructor"
                label="Instructor"
                placeholder="Type the instructor"
              />

              <TextInput
                id="videoUrl"
                name="videoUrl"
                label="VideoUrl"
                placeholder="www.youtube.com/someVideo"
              />

              <TextArea
                id="description"
                name="description"
                label="Description"
                placeholder="Write a description"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
