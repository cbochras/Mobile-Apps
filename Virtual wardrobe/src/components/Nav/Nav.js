import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { Button, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Nav = ( props ) => {

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };
  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = '';
  }

  const [ anchorEl, setAnchorEl ] = React.useState( null );

  const handleClick = ( event ) => {
    setAnchorEl( event.currentTarget );
  };

  const handleClose = () => {
    setAnchorEl( null );
  };

  return (
    
    <div className="nav">

    {/* Show the hamburger menu if the user is logged in */}
    { props.store.user.id == null ? ( null ) : ( <div className='hamburger'>
      <Button style={{ verticalAlign: 'baseline' }} aria-controls="simple-menu" aria-haspopup="true" onClick={ handleClick }>
        <MenuIcon fontSize={ 'medium' } style={{ color: 'white' }}/>
      </Button>
      <Menu id="simple-menu"
        anchorEl={ anchorEl }
        keepMounted
        open={ Boolean( anchorEl )}
        onClose={ handleClose }>
        <MenuItem onClick={ handleClose }>
        <Link className='link' to="/home">Home</Link></MenuItem>
        <MenuItem onClick={ handleClose }>
        <Link className='link' to="/addItem">Add Item</Link></MenuItem>
        <MenuItem onClick={ handleClose }>
        <Link className='link' to="/dressMe">Dress Me</Link></MenuItem>
        <MenuItem onClick={() => props.dispatch({ type: 'LOGOUT' })}>Logout</MenuItem>
      </Menu>
    </div>
    )}
    
    { props.store.user.id == null ? ( <Link to="/home">
      <h1 className="logged-out-nav-title">dressr
      </h1>
    </Link> ) : ( <Link to="/home">
      <h1 className="nav-title">dressr
      </h1>
    </Link> ) }
      
      <div className="nav-right">
        {/* <Link className="nav-link" to={loginLinkData.path}> */}
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {/* {loginLinkData.text} */}
        {/* </Link> */}

        {/* Show the user's profile image as their avatar if the user is logged in */}
        {props.store.user.id && (
          <>
            <div className="image-cropper">
              { props.store.user.profile_url.length === 0 ? 
              (<AccountCircleIcon className= "avatar" fontSize={ 'large' }></AccountCircleIcon>) : 
               (<img className="avatar" src={ props.store.user.profile_url } />) }
            </div>
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        {/* <Link className="nav-link" to="/about">
          About
        </Link> */}
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
