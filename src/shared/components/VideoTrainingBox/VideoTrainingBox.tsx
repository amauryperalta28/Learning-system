import { VideoTraining } from '../../interfaces/VideoTraining';
import './VideoTrainingBox.css';

type Props = {
  training: VideoTraining;
};
export const VideoTrainingBox = ({ training }: Props) => {
  return (
    <div className="course-box">
      <iframe className="course-thumbnail" src={training.videoUrl} />
      <div className="course-title">
        <a href={training.videoUrl}>
        <h3>{training.title}</h3>
        </a>
      
      </div>
      <div className="course-info">
        <div className="duration">
          {' '}
          <p>
            <i className="fa-regular fa-clock"></i>{' '}
            {training.estimatedTimeInMinutes} mins
          </p>{' '}
        </div>
        <div className="author">
          {' '}
          <p>
            <i className="fa-regular fa-user"></i> {training.authorName}
          </p>{' '}
        </div>
      </div>
    </div>
  );
};
