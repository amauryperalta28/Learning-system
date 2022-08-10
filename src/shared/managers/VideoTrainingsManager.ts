import { VideoTrainingRepositoryContract } from '../contracts/VideoTrainingsRepositoryContract';
import { VideoTraining } from '../interfaces/VideoTraining';

export class VideoTrainingManager {
  private static instance: VideoTrainingManager;

  private constructor(private taskRepository: VideoTrainingRepositoryContract) {
    this.taskRepository = taskRepository;
  }

  static getInstance(): VideoTrainingManager {
    return VideoTrainingManager.instance;
  }

  static build(taskRepository: VideoTrainingRepositoryContract): VideoTrainingManager {
    VideoTrainingManager.instance = new VideoTrainingManager(taskRepository);
    return this.getInstance();
  }

  getTrainings(): Promise<VideoTraining[]> {
    return this.taskRepository.getTrainings();
  }

  saveTraining(training: VideoTraining): Promise<void> {
    return this.taskRepository.saveTraining(training);
  }
}
