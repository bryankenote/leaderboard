import React from 'react';

let User = React.createClass({

    render: function() {
        let userPage = 'https://www.freecodecamp.com/' + this.props.username;
        return (
            <tr className="user">
                <td>{this.props.pos}</td>
                <td>
                    <a href={userPage}>
                        <img className="profile-pic" src={this.props.img} alt="profile-pic" />
                        <span>{this.props.username}</span>
                    </a>
                </td>
                <td className="points">{this.props.recent}</td>
                <td className="points">{this.props.alltime}</td>
            </tr>)
    }

});

export default User;