// console.log('foo');

import React, { Component } from 'react';

function a() {
    return 1 + 1;
}

switch (a) {
    case true:

        break;
    default:

}

a();


class A extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div hello={1} />
        );
    }
}

export default A;
