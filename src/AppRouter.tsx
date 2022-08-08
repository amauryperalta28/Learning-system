import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './core/pages/HomePage';
import { LayoutPage } from './core/pages/LayoutPage/LayoutPage';
import { TrainingModuleRouter } from './Features/Training/router/TrainingModuleRouter';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path="/trainings/*" element={<TrainingModuleRouter />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
