import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../LoginPage/LoginPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class RegisterPage extends Component {

  state = {
    username: '',
    password: '',
  };

  render() {
    return (
        <div>
          <RegisterForm />
          <div className='loginBtn' style={{ textAlign: 'center' }}>
              <button
                type="button"
                className="btn btn_asLink_login"
                onClick={() => {
                  this.props.history.push('/login');
                }}>
                Login
              </button>
            </div>
          </div>
    );
  }
}

export default connect( mapStoreToProps )( RegisterPage );
