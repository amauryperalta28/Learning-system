import { useContext, useEffect, useState } from 'react'
import { AppProviderContext, AppProviderDeps } from '../../../core/providers/AppProvider';
import { VideoTraining } from '../../interfaces';

export const useFeaturedTrainingList = () => {
    const { videoTrainingManager } = useContext<AppProviderDeps>(AppProviderContext);
    const [videoTrainings, setVideoTrainings] = useState<Array<VideoTraining>>([]);
  
    useEffect(() => {
        videoTrainingManager.getTrainings().then((result: VideoTraining[]) => {
        setVideoTrainings(result);
      });
    }, []);
  
    return {
      videoTrainings,
    };
}