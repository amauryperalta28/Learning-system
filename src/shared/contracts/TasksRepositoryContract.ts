import { TaskTraining } from "../interfaces";

export interface TaskRepositoryContract {
    getTasks(): TaskTraining[];
}