import { LoadingContext } from '@shared/providers/LoadingProvider';
import { useContext } from 'react';

export const useLoading = () => {
  const loadingContext = useContext(LoadingContext);
  if (!loadingContext) {
    throw new Error('LoadingProvider should be configured to use this hook');
  }

  const { showLoading, hideLoading, state } = loadingContext;

  return {
    showLoading,
    hideLoading,
    state,
  };
};
