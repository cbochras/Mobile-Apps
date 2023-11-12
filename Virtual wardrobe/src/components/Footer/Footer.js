import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Footer.css';

const Footer = ( props ) => {
    let loginLinkData = {
        path: '/login',
        text: '',
      };
    
      if (props.store.user.id != null) {
        loginLinkData.path = '/user';
        loginLinkData.text = 'Home';
      }

    return (
        <footer>
            <div className="footer-nav">
                {/* If the user is logged in, show these links */}
                {props.store.user.id && (
                <>
                <Link className="footer-nav-link" to={loginLinkData.path}>
                    {loginLinkData.text}
                </Link>
                <Link className="footer-nav-link" to="/addItem">
                    Add Item
                </Link>
                <Link className='footer-nav-link' to="/dressMe">
                    Dress Me
                </Link>
                <LogOutButton className="footer-nav-link" />
                </>
                )}
            </div>
        </footer>
    )
}

export default connect( mapStoreToProps ) ( Footer );
