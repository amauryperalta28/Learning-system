import React from 'react'
import { TaskTraining } from '../../interfaces';
import { TaskTrainingBox } from '../TaskTrainingBox/TaskTrainingBox';

export const TaskTrainingList = () => {
    const trainings: TaskTraining[] =
        [{
            id: new Date().getTime(),
            title: 'Intro to Power apps',
            dueDate: new Date(new Date().setHours(-48)),
            isCompleted: false,
        },
        {
            id: new Date().getTime() + 1,
            title: 'Intro to Power apps',
            dueDate: new Date(new Date().setHours(-48)),
            isCompleted: false,
        },
        {
            id: new Date().getTime() + 2,
            title: 'Intro to Power apps',
            dueDate: new Date(new Date()),
            isCompleted: false,
        }

        ];

    return (
        <div className="container-fluid training-list">

            <div className="row" >
                {
                    trainings.map((training) => (
                        <div className="col mb-3" key={training.id}>
                            <TaskTrainingBox training={training} />
                        </div>
                    ))
                }

            </div>

        </div>
    )
}