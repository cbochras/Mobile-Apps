import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import Searchish from '../SearchBar/SearchBar';
import Nav from '../Nav/Nav';
import { LibraryAdd } from "@mui/icons-material";


import './UserPage.css';
import {Typography} from "@mui/material";

class UserPage extends Component {

  state = {
    inputValue: ''
  }

  componentDidMount() {
    this.getInfo();
  }

  addItem = () => {
    this.props.history.push('/addItem')
  }

  getInfo = () => {
    this.props.dispatch({
      type: 'FETCH_CLOTHING'
    });
    this.props.dispatch({
      type: 'FETCH_TYPES'
    });
  }

  // on item click, dispatch clicked item to recent reducer and send to details page
  onItemClick = ( item ) => {
    // console.log( 'in onItemClick:', item );
    this.props.dispatch({
      // set recently clicked item
        type: 'SET_BATMAN',
        payload: item
    })
    this.props.history.push('/description');  
  }

  render() {
    if ( this.props.store.clothing.length === 0 ) {
      return (
        <div className='userPage'>
          <Nav/>
      <div className='newUserNotice'>
        <Typography variant='h5'>Your closet is empty!</Typography>
        <Typography variant='h6'>Add your first item!</Typography>
        <LibraryAdd style={{ width: 50, height: 50 }} fontSize='large' onClick={ this.addItem }></LibraryAdd>
    </div>
    </div>
    )
    } else { 
    return (
      <div>
        <div>
          <Nav/>
        </div>
          <Searchish/>
      </div>
    );
  }
}
}

// this allows us to use <App /> in index.js
export default connect( mapStoreToProps ) ( withRouter ( UserPage ));
