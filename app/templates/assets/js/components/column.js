import React from 'react';

class Column extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return (
            <div className="column">{this.props.children}</div>
        );
    }
}

Column.propTypes = {
    children: React.PropTypes.node
};

export default Column;
