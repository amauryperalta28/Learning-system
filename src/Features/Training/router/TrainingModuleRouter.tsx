import { Navigate, Route, Routes } from 'react-router-dom';
import { CreateTrainingPage } from '../pages/CreateTrainingPage/CreateTrainingPage';

export const TrainingModuleRouter = () => {
  return (
    <Routes>
        <Route path='create' element={<CreateTrainingPage />} />
        <Route path='tasks' element={ <h2>Tasks</h2>} />
        <Route path='search' element={ <h2>Search</h2>} />
        <Route path='create' element={<CreateTrainingPage />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}