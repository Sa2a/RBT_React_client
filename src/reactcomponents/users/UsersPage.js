import React, {Component} from 'react';
import AddUser from "./AddUser";
//parents,supervisors,drivers,admins
class UsersPage extends Component{

    render() {
        return(
            <div>
                <AddUser />
            </div>
        );
    }
}
export default UsersPage;