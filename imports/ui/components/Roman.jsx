import React, { Component } from 'react';

export default class Roman extends Component {
    state = {
        name: 'Roman',
    }

    render() {
        return (
            <div>
                <p>Welcome Mister {this.state.name}</p>
            </div>
        );
    }
}
