import { TaskRepositoryContract } from '../contracts/TasksRepositoryContract';
import { TaskTraining } from '../interfaces';

export class TasksManager {
  private static instance: TasksManager;

  private constructor(private taskRepository: TaskRepositoryContract) {
    this.taskRepository = taskRepository;
  }

  static getInstance(): TasksManager {
    return TasksManager.instance;
  }

  static build(taskRepository: TaskRepositoryContract): TasksManager {
    TasksManager.instance = new TasksManager(taskRepository);
    return this.getInstance();
  }

  getTasks(): Promise<TaskTraining[]> {
    return this.taskRepository.getTasks();
  }
}
