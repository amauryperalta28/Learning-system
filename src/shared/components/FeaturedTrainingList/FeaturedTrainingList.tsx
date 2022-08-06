import { VideoTrainingList } from '../VideoTrainingList/VideoTrainingList';
import { useFeaturedTrainingList } from './useFeaturedTrainingList';


export const FeaturedTrainingList = () => {
 const  { videoTrainings } = useFeaturedTrainingList();

  return (
    <>
        <VideoTrainingList sectionName='Featured' videoTrainings={ videoTrainings } />
    </>
  )
}