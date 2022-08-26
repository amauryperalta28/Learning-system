import { AppProviderContext } from '@core/providers/AppProvider';
import { useHttp, useLoading, useToast } from '@shared/hooks';
import { VideoTraining } from '@shared/interfaces';
import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

interface CreateTrainingValues {
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

  const { execute: executeCreateTraining } = useHttp();
  const { videoTrainingManager } = useContext(AppProviderContext);
  const navigate = useNavigate();
  const { showSuccess, showError } = useToast();
  const { showLoading, hideLoading } = useLoading();

  const onSubmit = async (values: CreateTrainingValues): Promise<boolean> => {
    const training: VideoTraining = buildTraining(values);

    handleSaveTraining(training);

    return true;
  };

  const handleSaveTraining = useCallback(
    (training: VideoTraining) => {
      executeCreateTraining({
        asyncFunction: () => {
          showLoading();
          return videoTrainingManager.saveTraining(training);
        },
        onSuccess: () => {
          showSuccess('Training created successfully');

          navigate('/', { replace: true });
        },
        onError: (e: any) => {
          showError(e.message);
        },
        onFinally: () => {
          hideLoading();
        },
      });
    },
    [videoTrainingManager]
  );

  const buildTraining = (training: CreateTrainingValues) => {
    return {
      title: training.title,
      videoUrl: training.videoUrl,
      estimatedTimeInMinutes: Number(training.length),
      authorName: training.title,
      description: training.description,
    };
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
    description: Yup.string().max(100, 'El máximo permitido es de 100'),
  });

  return {
    validationSchema,
    onSubmit,
    initialValues,
  };
};
