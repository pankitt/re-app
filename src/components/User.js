import React, { Component } from 'react';

export default class User extends Component {
    render() {
        const { name, surname, age } = this.props;
        return (
            <div>
                <p>{name} {surname}, {age}</p>
            </div>
        )
    }
}

