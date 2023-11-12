const clothingTypes = (state = [], action) => {
    switch (action.type) {
        case 'SET_TYPES':
            console.log('updated type reducer:', action.payload )
            return action.payload;
        default:
            return state;
    }
}

export default clothingTypes;