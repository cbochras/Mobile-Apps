import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './LoginForm.css';

import { 
  Button, 
  TextField,
  Typography
} from '@mui/material';


class LoginForm extends Component {

  state = {
    username: '',
    password: '',
  };


  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <div className='body' >

        <div className='loginForm' style={{ textAlign:'center' }}>
          <Typography
            style={{ fontFamily: 'Quicksand' }}
            variant='h4'>
            Welcome back!
          </Typography>

      <form className="formPanel" onSubmit={this.login}>
        {this.props.store.errors.loginMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.loginMessage}
          </h3>
        )}
        <div className='username'>
          <TextField 
            htmlFor="username"
            label="Username"
            required
            variant="outlined"
            value={this.state.username}
            onChange={ this.handleInputChangeFor( 'username' ) }>
          </TextField>
        </div>

        <div className='password'>
          <TextField 
            htmlFor="password"
            variant="outlined"
            label='Password'
            type="password"
            required
            value={this.state.password}
            onChange={this.handleInputChangeFor('password')}>
          </TextField>
        </div>

        <div className='logInBtn'>
          <Button className="btn" 
            style={{ color: 'white', fontSize: 18, background: 'linear-gradient(45deg, #1098cd 30%, #10bfcd 90%)'}}
            variant="outlined" 
            type="submit" name="submit" value="Log In">Log In</Button>
        </div>

      </form>

      </div>
      </div> 

    );
  }
}

export default connect(mapStoreToProps)(LoginForm);
