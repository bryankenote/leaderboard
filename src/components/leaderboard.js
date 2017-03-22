import React, { Component } from 'react';
import User from './user';

class Leaderboard extends React.Component {

    render() {
        return (
            <div className="Leaderboard">
                <table>
                    <tr>
                        <th>#</th>
                        <th>Camper Name</th>
                        <th>Points in past 30 days</th>
                        <th>All time points</th>
                    </tr>
                    <User />
                </table>
            </div>)
    }

};

export default Leaderboard;