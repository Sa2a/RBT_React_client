import axios from 'axios';

const initial = {
    login: {
        state: false,
        user: null
    }
};

/////////////////////////////////////////////////////////////////////////////////////
const rootReduce = (state = initial, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {
                ...state,
                login: {
                    state: true,
                    user: action.user
                }
            };
        }
        case "LOGOUT": {
            return {
                ...state,
                login: {
                    state: false,
                    user: null
                }
            };
        }
    }


    return state;
};
export default rootReduce;