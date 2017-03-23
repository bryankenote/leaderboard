import React from 'react';
//import React, { Component } from 'react';
import Leaderboard from './components/leaderboard';
import './App.css';
import request from 'request';

class App extends React.Component {
    componentWillMount() {
        this.setState({api: 'https://fcctop100.herokuapp.com/api/fccusers/top/'});
        this.setState({api_param: 'alltime'});
    }

    componentDidMount() {
        let self = this;
        request({
                url: self.state.api + self.state.api_param,
                method: 'GET',
            }, function(err, res, body){
                if(err) {
                    console.log(err);
                } else {
                    console.log(body);
                    self.setState({users: JSON.parse(body)});
                }
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>freeCodeCamp</h2>
                </div>
                <div className="container">
                    <div className="table-title">
                        <h2>Leaderboard</h2>
                    </div>
                    <Leaderboard api={this.state.api} users={this.state.users} />
                </div>
            </div>
        );
    }
}

export default App;
