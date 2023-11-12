const clothingReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CLOTHING':
            return action.payload;
        default:
            return state;
    }
}

export default clothingReducer;