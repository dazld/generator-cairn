import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="app">{this.props.children}</div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.node
};

export default App;
