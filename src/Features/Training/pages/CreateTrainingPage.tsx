import { Form, Formik } from "formik";
import { TextArea } from "../../../shared/components/TextArea/TextArea";
import { TextInput } from "../../../shared/components/TextInput/TextInput";
import * as Yup from 'yup';

export const CreateTrainingPage = () => {
    const initialValues = {title: '', category: '', length:'', instructor:'', videoUrl:'', description: ''};
    const onSubmit = ()=>{

        alert("submit");
    }

    const validationSchema = Yup.object({
         title: Yup.string().required('Este campo es requerido'),
         category: Yup.string().required('Este campo es requerido'), 
         length:Yup.string().required('Este campo es requerido'), 
         instructor:Yup.string().required('Este campo es requerido'), 
         videoUrl:Yup.string().required('Este campo es requerido'), 
         description: Yup.string().required('Este campo es requerido')
    })

  return (
    <div>
      <h2>Create Training Page</h2>

      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {
          () => (
            <Form >
            <div className="container-fluid">
    
              <TextInput id="title" name="title" label="Title" placeholder="Intro to power app virtuals" />
    
              <TextInput id="category" name="category" label="Category" placeholder="Power platform"  />
    
              <TextInput id="length" name="length" label="Length" />
    
              <TextInput id="instructor" name="instructor" label="Instructor" placeholder="Type the instructor"  />
    
              <TextInput id="videoUrl" name="videoUrl" label="VideoUrl" placeholder="www.youtube.com/someVideo"  />
    
             <TextArea  id="description" name="description" label="Description" placeholder="Write a description"  />
    
             <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </Form>
          )

        }
      </Formik>


    </div>
  );
};
