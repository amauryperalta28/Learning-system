import { VideoTrainingBox } from '../VideoTrainingBox/VideoTrainingBox'
import './VideoTrainingList.css'
import { VideoTraining } from '../../interfaces/VideoTraining';

export type Props = {
    sectionName?: string
}

export const VideoTrainingList = ({sectionName}: Props) => {
    const trainings: VideoTraining[] =
        [{
            id: new Date().getTime(),
            title: 'Intro to Power apps',
            estimatedTimeInMinutes: 60,
            authorName: 'April Dunnam',
            videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY'
        },
        {
            id: new Date().getTime() + 1,
            title: 'Intro to Power apps',
            estimatedTimeInMinutes: 60,
            authorName: 'April Dunnam',
            videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY'
        },
        {
            id: new Date().getTime() + 2,
            title: 'Intro to Power apps',
            estimatedTimeInMinutes: 60,
            authorName: 'April Dunnam',
            videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY'
        }
        
    ];


    return (
        <div className="container-fluid training-list">
            { sectionName && <h2>{sectionName}</h2>} 
            <div className="row" >
                {
                    trainings.map((training) => (
                        <div className="col mb-3" key={training.id}>
                            <VideoTrainingBox  training={training} />
                        </div>
                    ))
                }

            </div>

        </div>
    )
}