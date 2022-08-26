import { Navigate, Route, Routes } from 'react-router-dom';
import { CreateTrainingPage } from '../pages/CreateTrainingPage/CreateTrainingPage';

export const TrainingModuleRouter = () => {
  return (
    <Routes>
        <Route path='create' element={<CreateTrainingPage />} />
        <Route path='tasks' element={ <h1>Tasks</h1>} />
        <Route path='search' element={ <h1>search</h1>} />
        <Route path='create' element={<CreateTrainingPage />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}