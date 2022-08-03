import { TasksManager } from '../../shared/managers/TasksManager';
import { TaskRepository } from '../../shared/repositories';
import { createContext, useMemo } from 'react';

export interface AppProviderDeps {
  taskManager: TasksManager;
}

const initialDeps: AppProviderDeps = {
  taskManager: TasksManager.build(new TaskRepository()),
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
