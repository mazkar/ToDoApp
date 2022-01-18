const initialState = {
  activity: '',
  isLoading: false,
};

export const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_ACTIVITY':
      return {
        ...state,
        activity: action.payload,
        isLoading: false,
      };
    case 'GET_ALL_ACTIVITY':
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
