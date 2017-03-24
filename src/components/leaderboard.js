import React from 'react';
import User from './user';

let Leaderboard = React.createClass({
    onClick: function(e) {
        this.props.handleChange(e.target.value);
    },

    render: function() {
        let userRows;
        if(this.props.users) {
            userRows = this.props.users.map( (user, index) => {
                return (
                    <User key={index} pos={index+1} img={user.img} username={user.username} recent={user.recent} alltime={user.alltime} />
                );
            });
        }

        return (
            <div id="Leaderboard" className="Leaderboard">
                <table>
                    <tbody>
                        <tr>
                            <th>#</th>
                            <th>Camper Name</th>
                            <th>
                                <button onClick={this.onClick} value="recent">Points in past 30 days</button>
                            </th>
                            <th>
                                <button onClick={this.onClick} value="alltime">All time points</button>
                            </th>
                        </tr>
                        {userRows}
                    </tbody>
                </table>
            </div>)
    }

});

export default Leaderboard;