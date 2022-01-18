export const getAllActivity = payload => {
  return {
    type: 'GET_ALL_ACTIVITY',
    payload,
  };
};

export const setAllActivity = payload => {
  return {
    type: 'SET_ALL_ACTIVITY',
    payload,
  };
};
