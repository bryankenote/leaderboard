import React from 'react';
//import React, { Component } from 'react';

class User extends React.Component {

    render() {
        let userPage = 'https://www.freecodecamp.com/' + this.props.username;
        return (
            <tr className="user">
                <td>1</td>
                <td><img className="profile-pic" src={this.props.img} alt="profile-pic" /><a href={userPage}>{this.props.username}</a></td>
                <td>{this.props.recent}</td>
                <td>{this.props.alltime}</td>
            </tr>)
    }

};

export default User;