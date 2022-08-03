import CheckOutlined from '@ant-design/icons/lib/icons/CheckOutlined';
import Card from 'antd/lib/card';
import { TaskTraining } from '../../interfaces';
import { DueDateComponent } from '../DueDateComponent/DueDateComponent';
import './TaskTrainingBox.css';

export type Props = {
  training: TaskTraining
}

export const TaskTrainingBox = ({ training }: Props) => {
  return (

    <Card style={{ width: "400px" }} >
      <div className="course-title">
        <h3>{training.title}</h3>
      </div>

      <DueDateComponent dueDate={training.dueDate} />

      <div className="completed-task d-flex justify-content-end mt-5">
        <CheckOutlined style={{ fontSize: '30px' }} />
        <span className='ms-2'>Mark Complete</span>
      </div>

    </Card>

  )
}
