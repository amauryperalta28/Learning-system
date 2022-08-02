import Card from 'antd/lib/card';
import { TaskTraining } from '../../interfaces';
import { DueDateComponent } from '../DueDateComponent/DueDateComponent';
import './TaskTrainingBox.css';

export type Props = {
  training: TaskTraining
}

export const TaskTrainingBox = ({ training }: Props) => {
  return (

    <Card >
      <div className="course-title">
        <h3>{training.title}</h3>
      </div>

      <DueDateComponent dueDate={training.dueDate} />

    </Card>

  )
}
