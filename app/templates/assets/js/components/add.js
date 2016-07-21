import { connect } from 'react-redux';
import { add } from '../actions/count';
import { Link } from 'react-router';
import React, { Component } from 'react';
import Column from './column';


class Add extends Component {
    static fetchData({ store, params }) {
        return store.dispatch(add(parseInt(params.num, 10)));
    }
    constructor() {
        super(...arguments);
        this.state = {
            loading: false
        };
    }
    componentWillReceiveProps(props) {

        if (this.state.loading) {
            return;
        }

        this.setState({
            loading: true
        });
        this.props.dispatch(add(parseInt(props.params.num, 10))).finally(() => {
            this.setState({
                loading: false
            });
        });
    }
    render() {
        const isLoading = this.state.loading;
        return (
            <Column>
                {isLoading && <p>loading...</p>}
                {!isLoading &&
                    <div>
                        <h3>The answer is: </h3>
                        <Link to={`/add/${this.props.count}`}>{this.props.count}</Link>
                    </div>
                }
            </Column>
        );
    }
}

Add.propTypes = {
    count: React.PropTypes.number.isRequired,
    dispatch: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { count } = state;
    return {
        count
    };
}

export default connect(mapStateToProps)(Add);
