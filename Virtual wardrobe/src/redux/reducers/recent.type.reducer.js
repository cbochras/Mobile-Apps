const recentTypeReducer = (state = [], action) => {
    console.log( 'in recentTypeReducer:', action.payload )

    if ( action.type === 'SET_TYPE') {
      return action.payload;
    }
    // switch (action.type) {
    //   case 'SET_TYPE':
    //     return action.payload;
    //   case 'UNSET_RECENT_TYPE':
    //     return {};
    //   default:
        return state;
    }
  // };
  
  // item will be on the redux state at:
  // state.item
  export default recentTypeReducer;
  