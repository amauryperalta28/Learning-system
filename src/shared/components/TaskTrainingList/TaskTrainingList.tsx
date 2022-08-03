import { TaskTrainingBox } from '../TaskTrainingBox/TaskTrainingBox';
import { useTaskTrainingList } from './useTaskTrainingList';

export const TaskTrainingList = () => {
    const { tasksTrainings } = useTaskTrainingList();

    return (
        <div className="container-fluid training-list">

            <div className="row" >
                {
                    tasksTrainings.map((training) => (
                        <div className="col mb-3" key={training.id}>
                            <TaskTrainingBox training={training} />
                        </div>
                    ))
                }

            </div>

        </div>
    )
}