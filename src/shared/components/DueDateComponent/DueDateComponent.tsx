import { CalendarOutlined } from '@ant-design/icons/lib/icons'
import './DueDateComponent.css'

type Props = {
    dueDate: Date
}

export const DueDateComponent = ({ dueDate }: Props) => {
    const todayMonth = new Date().getMonth() + 1;
    const todayDay = new Date().getDate();

    const isOnTime = () => {
        const dueDateDay = dueDate.getDate();
        const dueDateMonth = dueDate.getMonth() + 1;

        if (todayMonth > dueDateMonth) {
            return false;
        }

        if(todayMonth < dueDateMonth){
            return true;
        }

        if (todayDay <= dueDateDay) return true;

        return false
    }

    const getExpirationClass = () => {
        return isOnTime() ? 'on-time' : 'expired';
    }

    const dueMonth = dueDate.getMonth() + 1;
    const dueDay = dueDate.getDate();

    return (

        <div className={`due-date-box ${getExpirationClass()} d-flex justify-content-center align-items-center`}>
            <CalendarOutlined style={{ fontSize: '20px' }} />
            <span>{dueMonth}/{dueDay}</span>
        </div>
    )
}