import axios from 'axios';

const initial = {
    Users: [
        {
            firstName: 'khaled',
            lastName: 'elsaka',
            email: 'khaled.elsaka25@gmail.com',
            password: 'sadf',
            contactNumber: '+201148827429',
            nationalNumber: '12345646465464887878',
            address: 'Giza-great mosque street',
            DayOfBirth: '32',
            MothOfBirth: '2',
            yearOfBirth: '3133',
            userType: 'parent'
        },
        {
            firstName: 'khaled',
            lastName: 'elsaka',
            email: 'khaled.elsaka25@gmail.com',
            password: 'sadf',
            contactNumber: '+201148827429',
            nationalNumber: '12345646465464887878',
            address: 'Giza-great mosque street',
            DayOfBirth: '32',
            MothOfBirth: '2',
            yearOfBirth: '3133',
            userType: 'parent'
        },
        {
            firstName: 'khaled',
            lastName: 'elsaka',
            email: 'khaled.elsaka25@gmail.com',
            password: 'sadf',
            contactNumber: '+201148827429',
            nationalNumber: '12345646465464887878',
            address: 'Giza-great mosque street',
            DayOfBirth: '32',
            MothOfBirth: '2',
            yearOfBirth: '3133',
            userType: 'parent'
        },
        {
            firstName: 'khaled',
            lastName: 'elsaka',
            email: 'khaled.elsaka25@gmail.com',
            password: 'sadf',
            contactNumber: '+201148827429',
            nationalNumber: '12345646465464887878',
            address: 'Giza-great mosque street',
            DayOfBirth: '32',
            MothOfBirth: '2',
            yearOfBirth: '3133',
            userType: 'parent'
        },
        {
            firstName: 'khaled',
            lastName: 'elsaka',
            email: 'khaled.elsaka25@gmail.com',
            password: 'sadf',
            contactNumber: '+201148827429',
            nationalNumber: '12345646465464887878',
            address: 'Giza-great mosque street',
            DayOfBirth: '32',
            MothOfBirth: '2',
            yearOfBirth: '3133',
            userType: 'parent'
        },
        {
            firstName: 'khaled',
            lastName: 'elsaka',
            email: 'khaled.elsaka25@gmail.com',
            password: 'sadf',
            contactNumber: '+201148827429',
            nationalNumber: '12345646465464887878',
            address: 'Giza-great mosque street',
            DayOfBirth: '32',
            MothOfBirth: '2',
            yearOfBirth: '3133',
            userType: 'parent'
        }
    ]
};
let getUsers = (state, url) => {
    axios({
        url: '/users/' + url,
        method: 'post'
    }).then((res) => {
        if (res.status == 200) {

            return {
                ...state,
                Users: res.users
            }
        } else {
            console.log('error');
        }
    }).catch(error => console.log(error));
    return state;

};
/////////////////////////////////////////////////////////////////////////////////////
const usersReducer = (state = initial, action) => {

    if (action.type === 'addUser') {
        console.log("sent user ");
        console.log(action.user);

        axios({
            url: '/add_user',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            data: {
                user: action.user
            }
        }).then((res) => {
            console.log("received user x");

            if (res.status === 200) {
                console.log("received user ");
                console.log(res.data.user);
                return {
                    ...state,
                    Users: [...state.Users, res.data.user]
                }
            } else {
                console.log('nothing');

            }
        }).catch(error => console.log(error));
    } else if (action.type === 'getUsers') {
        //alert(action.getUserType);
        // return getUsers(state, action.getUserType);
    }

    return state;
};
export default usersReducer;