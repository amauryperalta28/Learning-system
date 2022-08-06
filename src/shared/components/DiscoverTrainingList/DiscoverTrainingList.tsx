import { VideoTrainingList } from '../VideoTrainingList/VideoTrainingList';
import { useDiscoverTrainingList } from './useDiscoverTrainingList';

export const DiscoverTrainingList = () => {
    const { videoTrainings } = useDiscoverTrainingList();
    return (
        <>
            <VideoTrainingList sectionName='Featured' videoTrainings={videoTrainings} />
        </>
    )
}