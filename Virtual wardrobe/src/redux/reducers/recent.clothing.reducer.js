const recentClothingReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_BATMAN':
        return action.payload;
      case 'UNSET_RECENT':
        return {};
      default:
        return state;
    }
  };
  
  // item will be on the redux state at:
  // state.item
  export default recentClothingReducer;
  