const initialState = 0;

const score = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_SCORE':
            return state + 1;

        case 'RESET_SCORE':
            return initialState;

        default:
            return state;
    }
};

export default score;
