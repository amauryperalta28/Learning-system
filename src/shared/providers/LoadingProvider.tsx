import {
  hideLoadingAction,
  showLoadingAction,
} from '@shared/actions/loadingReducerActions';
import { loadingReducer, LoadingState } from '@shared/reducers/loadingReducer';
import { createContext, useCallback, useMemo, useReducer } from 'react';

interface Props {
  children: React.ReactNode | Array<React.ReactNode>;
}

export interface LoadingContextModel {
  state: LoadingState;
  showLoading: () => void;
  hideLoading: () => void;
}

export const LoadingContext = createContext({} as LoadingContextModel);
const initialState: LoadingState = {
  isVisible: false,
};

export const LoadingProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(loadingReducer, initialState);

  const showLoading = useCallback(() => {
    dispatch(showLoadingAction);
  }, []);

  const hideLoading = useCallback(() => {
    dispatch(hideLoadingAction);
  }, []);

  const value = useMemo(
    () => ({
      showLoading,
      hideLoading,
      state,
    }),
    [state, showLoading, hideLoading]
  );

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
