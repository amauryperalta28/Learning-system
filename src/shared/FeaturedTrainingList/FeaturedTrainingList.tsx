import { TrainingBox } from '../TrainingBox/TrainingBox'
import './FeaturedTrainingList.css'
import { Training } from '../interfaces/Training';

export const FeaturedTrainingList = () => {
    const trainings: Training[] =
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
            <h2>Featured</h2>
            <div className="row" >
                {
                    trainings.map((training) => (
                        <div className="col mb-3" key={training.id}>
                            <TrainingBox  training={training} />
                        </div>
                    ))
                }

            </div>

        </div>
    )
}