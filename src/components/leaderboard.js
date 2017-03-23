import React from 'react';
//import React, { Component } from 'react';
import User from './user';

class Leaderboard extends React.Component {
    componentWillMount() {
        //this.setState({api_param: 'alltime'});
        //this.setState({api_param: 'recent'});
    }

    render() {
        let userRows;
        if(this.props.users) {
            userRows = this.props.users.map( (user, index) => {
                return (
                    <User index={index} img={user.img} username={user.username} recent={user.recent} alltime={user.alltime} />
                );
            });
        }

        return (
            <div className="Leaderboard">
                <table>
                    <tbody>
                        <tr>
                            <th>#</th>
                            <th>Camper Name</th>
                            <th>Points in past 30 days</th>
                            <th>All time points</th>
                        </tr>
                        {userRows}
                    </tbody>
                </table>
            </div>)
    }

};

export default Leaderboard;