import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {increaseByTwoCounter} from '../redux/actions/counterActions'
import {connect} from "react-redux";
import {Button} from "react-bootstrap";

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                <Button variant="dark" onClick={e => {this.props.dispatch(increaseByTwoCounter())}}>+ 2</Button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({action:bindActionCreators(increaseByTwoCounter(), dispatch)})

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);