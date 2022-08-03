import { TaskRepositoryContract } from '../contracts/TasksRepositoryContract';
import { TaskTraining } from '../interfaces';

export class TaskRepository implements TaskRepositoryContract {
  getTasks(): TaskTraining[] {
    const trainings: TaskTraining[] = [
      {
        id: new Date().getTime(),
        title: 'Intro to Power apps',
        dueDate: new Date(new Date().setHours(-48)),
        isCompleted: false,
      },
      {
        id: new Date().getTime() + 1,
        title: 'Intro to Power apps',
        dueDate: new Date(new Date().setHours(-48)),
        isCompleted: false,
      },
      {
        id: new Date().getTime() + 2,
        title: 'Intro to Power apps',
        dueDate: new Date(new Date()),
        isCompleted: false,
      },
    ];

    return trainings;
  }
}
