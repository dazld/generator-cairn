import React from 'react';
import Column from './column';

class Header extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return (
            <div className="header">
                <Column>
                    <h1>Cairn</h1>
                </Column>
            </div>
        );
    }
}

export default Header;
