import { Training } from '../interfaces/Training';
import './TrainingBox.css';

type Props = {
  training: Training;
};
export const TrainingBox = ({ training }: Props) => {
  return (
    <div className="container course-box">
      <iframe className="course-thumbnail" src={training.videoUrl} />
      <div className="course-title">
        <h3>{training.title}</h3>
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
