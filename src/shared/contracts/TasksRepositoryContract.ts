import { TaskTraining } from "../interfaces";

export interface TaskRepositoryContract {
    getTasks(): Promise<TaskTraining[]>;
}