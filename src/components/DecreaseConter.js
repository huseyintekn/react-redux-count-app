import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {decreaseCounter} from "../redux/actions/counterActions";
import {connect} from 'react-redux';
class DecreaseConter extends Component {
    render() {
        return (
            <div>
                <Button variant="danger" onClick={e => {this.props.dispatch(decreaseCounter())}}>- 1</Button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {action:bindActionCreators(decreaseCounter(), dispatch) }
}

export default connect(mapDispatchToProps)(DecreaseConter);