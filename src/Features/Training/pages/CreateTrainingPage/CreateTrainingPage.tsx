import { TextArea } from '@shared/components/TextArea/TextArea';
import { TextInput } from '@shared/components/TextInput/TextInput';
import { Form, Formik } from 'formik';

import { useCreateTrainingPage } from './useCreateTrainingPage';

export const CreateTrainingPage = () => {
  const {initialValues, validationSchema, onSubmit} = useCreateTrainingPage();

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
