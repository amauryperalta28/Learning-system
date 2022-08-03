import { useContext, useEffect, useState } from 'react';
import {
  AppProviderContext,
  AppProviderDeps,
} from '../../../core/providers/AppProvider';
import { TaskTraining } from '../../interfaces/TaskTraining';

export const useTaskTrainingList = () => {
  const { taskManager } = useContext<AppProviderDeps>(AppProviderContext);
  const [tasksTrainings, setTasksTraining] = useState<Array<TaskTraining>>([])

  const getTaskTrainings = (): TaskTraining[] => {
    return taskManager.getTasks();
  };

  useEffect(() => {
   setTasksTraining(taskManager.getTasks()) 
  }, [])
  

  return {
    tasksTrainings,
    getTaskTrainings,
  };
};
