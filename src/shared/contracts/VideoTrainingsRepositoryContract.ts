import { VideoTraining } from '../interfaces/VideoTraining';

export interface VideoTrainingRepositoryContract {
    getTrainings(): Promise<VideoTraining[]>;
}