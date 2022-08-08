import { Navigate, Route, Routes } from 'react-router-dom';
import { CreateTrainingPage } from '../pages/CreateTrainingPage';

export const TrainingModuleRouter = () => {
  return (
    <Routes>
        <Route path='create' element={<CreateTrainingPage />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}