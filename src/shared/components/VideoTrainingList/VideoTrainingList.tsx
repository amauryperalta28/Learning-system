import { VideoTrainingBox } from '../VideoTrainingBox/VideoTrainingBox';
import { useVideoTrainingList } from './useVideoTrainingList';
import './VideoTrainingList.css';

export type Props = {
    sectionName?: string
}

export const VideoTrainingList = ({ sectionName }: Props) => {
    //TODO: Refactorizar para mover el consumo de la promesa en un componente aparte Featured o Discover
    const { videoTrainings } = useVideoTrainingList();
    
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