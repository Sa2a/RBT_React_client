import axios from 'axios';

const initial = {
    Users: []
};
const rootReduce = (state = initial, action) => {
    if (action.type === 'addUser') {
        axios({
            url: '/users/addUser',
            method: 'post',
            data: {
                user: action.user
            }
        }).then((res) => {
            if (res.status == 200) {
                console.log(action.user);
                return {
                    ...state,
                    Users: [...state.Users, action.user]
                }
            }
            else{
                console.log('nothing');

            }
        }).catch(error => console.log(error));
    }
    return state;
};
export default rootReduce;