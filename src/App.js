import React, {Component} from 'react';
import DisplayUsers from "./reactcomponents/DisplayUsers";
import AddUser from "./reactcomponents/AddUser";

class App extends Component {
    state = {
        users: [{id: 1, name: "sa2a", password: "123"}]
    };

    addUser = (user) => {
        user.id = Math.random();
        let uArr = [...this.state.users, user];
        this.setState({users: uArr});
    };
    removeUser = (id) => {
        let uArr = this.state.users.filter(user=>{
            return id !== user.id;
        });

        this.setState({users: uArr});
    };

    render() {
        return (
            <div className="App">
                <DisplayUsers users={this.state.users} removeUser = {this.removeUser}/>
                <AddUser addUser={this.addUser}/>

            </div>
        );
    }
}

export default App;
