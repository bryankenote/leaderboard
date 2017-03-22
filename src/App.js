import React, { Component } from 'react';
import Leaderboard from './components/leaderboard';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
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
                    <Leaderboard />
                </div>
            </div>
        );
    }
}

export default App;
