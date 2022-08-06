import { VideoTraining } from '../../interfaces';
import { VideoTrainingBox } from '../VideoTrainingBox/VideoTrainingBox';
import './VideoTrainingList.css';

export type Props = {
    sectionName?: string;
    videoTrainings: VideoTraining[]
}

export const VideoTrainingList = ({ sectionName, videoTrainings }: Props) => {
    
    return (
        <div className="container-fluid training-list">
            {sectionName && <h2>{sectionName}</h2>}
            <div className="row" >
                {
                    videoTrainings.map((training) => (
                        <div className="col mb-3" key={training.id}>
                            <VideoTrainingBox training={training} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}