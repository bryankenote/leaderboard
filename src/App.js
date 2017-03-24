import React from 'react';
import Leaderboard from './components/leaderboard';
import './App.css';
import request from 'request';

let App = React.createClass({
    getInitialState: function() {
        return ({
            api: 'https://fcctop100.herokuapp.com/api/fccusers/top/',
            api_param: 'recent'
        });
    },

    //componentDidMount: function() {
    componentWillMount: function() {
        this.getUsers();
    },

    getUsers: function() {
        let self = this;
        request({
            url: self.state.api + self.state.api_param,
            method: 'GET',
        }, function(err, res, body){
            if(err) {
                console.log(err);
            } else {
                self.setState({users: JSON.parse(body)});
            }
        });
    },

    changeUserOrder: function(param) {
        this.setState({api_param: param}, function() {
            this.getUsers();
        });
    },

    render: function() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>freeCodeCamp</h2>
                </div>
                <div className="container">
                    <div className="table-title">
                        <h2>Leaderboard</h2>
                    </div>
                    <Leaderboard api={this.state.api + this.state.api_param} users={this.state.users} handleChange={this.changeUserOrder} />
                </div>
            </div>
        );
    }
});

export default App;
