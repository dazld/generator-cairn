import React, { Component } from 'react';
import Header from './header';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.node
};

export default App;
