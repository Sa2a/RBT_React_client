import axios from 'axios';

const initial = {
    selectedParents:[],
    pickUpPoints:[]
};

/////////////////////////////////////////////////////////////////////////////////////
const setRoutes = (state = initial, action) => {
    switch (action.type) {
        case "SETSELECTEDPARENTS": {
            return {
                ...state,
                selectedParents: action.selectedParents
            };
        }
        case "SETPICKUPPOINTS": {
            return {
                ...state,
                pickUpPoints: action.pickUpPoints
            };
        }
    }

    return state;
};
export default setRoutes;