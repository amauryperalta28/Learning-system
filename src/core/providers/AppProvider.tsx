import { TasksManager, VideoTrainingManager } from '../../shared/managers';
import { TaskRepository } from '../../shared/repositories';
import { createContext, useMemo } from 'react';
import { VideoTrainingRepository } from '../../shared/repositories/VideoTrainingRepository';

export interface AppProviderDeps {
  taskManager: TasksManager;
  videoTrainingManager: VideoTrainingManager;
}

const initialDeps: AppProviderDeps = {
  taskManager: TasksManager.build(new TaskRepository()),
  videoTrainingManager: VideoTrainingManager.build(new VideoTrainingRepository()),
};

export const AppProviderContext = createContext<AppProviderDeps>(initialDeps);

type Props = {
  children: React.ReactNode;
};

export const AppDependenciesProvider = ({ children }: Props) => {
 const val = useMemo(()=> initialDeps, []);

  return (
    <AppProviderContext.Provider value={val}>
      {children}
    </AppProviderContext.Provider>
  );
};
