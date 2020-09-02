const initialState = {
  erroring: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_TEAM':
      return { ...state, ...action.team, erroring: false };
    case 'LOAD_TEAM_ERROR':
      return { ...state, erroring: true };
    case 'CLEAR':
      return { ...initialState };
    default:
      return state;
  }
};
