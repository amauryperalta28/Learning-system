import * as Yup from 'yup';

interface Values {
  title: string;
  category: string;
  length: string;
  instructor: string;
  videoUrl: string;
  description: string;
}

export const useCreateTrainingPage = () => {
  const initialValues = {
    title: '',
    category: '',
    length: '',
    instructor: '',
    videoUrl: '',
    description: '',
  };
  const onSubmit = (values: Values) => {
    console.log({ createTrainingForm: values });
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

  return {
    validationSchema,
    onSubmit,
    initialValues

  };
};
