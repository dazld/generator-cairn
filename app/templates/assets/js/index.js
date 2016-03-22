// mainly here to

import React, { Component } from 'react';
// alert();
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


const aa = {
    b: 123,
    c: 213,
    d: 123
};

console.log({
    ...aa,
    thing: process.env.NODE_ENV
});


export default A;
