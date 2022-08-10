import { VideoTrainingRepositoryContract } from '../contracts/VideoTrainingsRepositoryContract';
import { VideoTraining } from '../interfaces';

export class VideoTrainingRepository
  implements VideoTrainingRepositoryContract
{
  saveTraining(training: VideoTraining): Promise<void> {
    return Promise.resolve();
  }

  getTrainings(): Promise<VideoTraining[]> {

    const trainings: VideoTraining[] = [
      {
        id: new Date().getTime(),
        title: 'Intro to Power apps',
        estimatedTimeInMinutes: 60,
        authorName: 'April Dunnam',
        videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
      },
      {
        id: new Date().getTime() + 1,
        title: 'Intro to Power apps',
        estimatedTimeInMinutes: 60,
        authorName: 'April Dunnam',
        videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
      },
      {
        id: new Date().getTime() + 2,
        title: 'Intro to Power apps',
        estimatedTimeInMinutes: 60,
        authorName: 'April Dunnam',
        videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
      },
    ];

    return Promise.resolve(trainings);
  }
}
