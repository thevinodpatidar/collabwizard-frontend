import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logoutUserAction } from './actions';
import { getToken, removeToken } from '../../../utils/localStorage';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
    constructor(props) {
        super(props)
        this.state = {
 
        };
      }
    componentDidMount(){
        const token = getToken("token");
        this.props.logout(token);
        removeToken("token");
    }
    render() {
        return (
            <div>
                <Redirect to="/" />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
      logout : (token) => dispatch(logoutUserAction(token)),
    }
  }

export default connect(null,mapDispatchToProps)(Logout);