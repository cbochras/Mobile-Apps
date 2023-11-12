import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css';


class LoginPage extends Component {
  render() {
    return (
      <div className='loginPage'>
        <LoginForm />
        <div className='newHereBtn' style={{ marginLeft: '100px'}}>
          <button 
            type="button"
            className="btn btn_asLink_register"
            onClick={() => {
              this.props.history.push('/registration');
            }}>
            New Here? Sign up!
          </button>
        </div>
      </div>
    );
  }
}

export default connect( mapStoreToProps )( LoginPage );
