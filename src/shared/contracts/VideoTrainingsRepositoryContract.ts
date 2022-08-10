import { VideoTraining } from '../interfaces/VideoTraining';

export interface VideoTrainingRepositoryContract {
    getTrainings(): Promise<VideoTraining[]>;
    saveTraining(training: VideoTraining): Promise<void>;
}