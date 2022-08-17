export interface LoadingState {
  isVisible: boolean;
}

export interface LoadingAction {
  type: LoadingActionType;
}

export enum LoadingActionType {
  showLoading = 0,
  hideLoading = 1,
}


export const loadingReducer = (
  initialState: LoadingState,
  action: LoadingAction
) => {
  switch (action.type) {
    case LoadingActionType.showLoading:
      return { isVisible: true };

    case LoadingActionType.hideLoading:
      return { isVisible: false };

    default:
      return initialState;
  }
};
