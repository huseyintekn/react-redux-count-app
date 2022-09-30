import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {increaseCounter} from '../redux/actions/counterActions'
import {connect} from "react-redux";
class IncreaseConter extends Component {
    render() {
        return (
            <div>
                <Button variant="success" onClick={e => {this.props.dispatch(increaseCounter())}}>+ 1</Button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {action:bindActionCreators(increaseCounter(), dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseConter);