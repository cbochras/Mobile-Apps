import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class LandingPage extends Component {
  state = {
    heading: 'Class Component',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="container">

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

export default connect(mapStoreToProps)(LandingPage);
