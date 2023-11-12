import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../RegisterForm/RegisterForm.css'

import { 
  Button, 
  TextField,
  Typography 
} from '@mui/material'
import '../LoginForm/LoginForm.css';

class RegisterForm extends Component {

  state = {
    first_name: '',
    email: '',
    username: '',
    password: '',
    profile_url: ''
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        first_name: this.state.first_name,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        profile_url: this.state.profile_url,
      },
    });
  }; // end registerUser

  handleInputChangeFor = ( propertyName ) => ( event ) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <div>

        <div className='registerForm'>

          <Typography
            style={{ fontFamily: 'Quicksand'}}
            variant='h4'>
            Register
          </Typography>
        
          <form className="registerFormPanel" onSubmit={this.registerUser}>
            {this.props.store.errors.registrationMessage && (
              <h3 className="alert" role="alert">
                {this.props.store.errors.registrationMessage}
              </h3>
            )}
        
        <div className='queenRegisterFormInput'>
          <div className='registerFormInputs'>
          <TextField 
              htmlFor="first_name"
              label='First Name'
              required
              variant="outlined"
              value={ this.state.first_name }
              onChange={this.handleInputChangeFor( 'first_name' )}>
            </TextField>
        </div>

          <div className='registerFormInputs'>
            <TextField 
              htmlFor="email"
              variant="outlined"
              label='Email'
              required
              value={ this.state.email }
              onChange={this.handleInputChangeFor( 'email' )}>
            </TextField>
          </div>

          <div className='registerFormInputs'>
            <TextField 
              htmlFor="username"
              label="Username"
              required
              variant="outlined"
              value={this.state.username}
              onChange={ this.handleInputChangeFor( 'username' ) }>
            </TextField>
          </div>

          <div className='registerFormInputs'>
          <TextField 
            htmlFor="password"
            variant="outlined"
            label='Password'
            type="password"
            name="password"
            required
            value={this.state.password}
            onChange={this.handleInputChangeFor('password')}>
          </TextField>
          </div>

          <div className='registerFormInputs'>
            <TextField 
              htmlFor="profile_url"
              variant="outlined"
              label="Profile Image URL"
              value={ this.state.profile_url }
              onChange={this.handleInputChangeFor( 'profile_url' )}>
            </TextField>
          </div>
        </div>
        
        <div className='logInBtn'>
          <Button className="btn" 
            style={{ color: 'white', fontSize: 18, background: 'linear-gradient(45deg, #1098cd 30%, #10bfcd 90%)'}}
            variant="outlined" 
            type="submit" name="submit" value="Register">Register
          </Button>
        </div>
     
      </form>
        
        </div>

      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
