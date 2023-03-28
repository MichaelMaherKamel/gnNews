const initialState = {
  isGridView: true,
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return {
        isGridView: !state.isGridView,
      };
    default:
      return state;
  }
};

export default viewReducer;
