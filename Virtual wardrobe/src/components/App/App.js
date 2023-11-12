import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Typography } from '@mui/material'
import { ThemeProvider, StyledEngineProvider, createTheme,  } from '@mui/material/styles';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AddItem from '../AddItem/AddItem';
import EditItem from '../EditItem/EditItem';
import Description from '../Description/Description';
import DressMe from '../DressMe/DressMe';
import Footer from '../Footer/Footer';
import './App.css';

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {}
      }
    }
}
});


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    dispatch({ type: 'FETCH_USER' })
  }

    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
      <Router>
        <div>

          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
              component={AboutPage}
            />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
              component={UserPage}
            />

            <ProtectedRoute
              // logged in shows AddItem else shows LoginPage
              exact
              path="/addItem"
              component={ AddItem }
            />

            <ProtectedRoute
              // logged in shows EditItem else shows LoginPage
              exact
              path="/editItem"
              component={ EditItem }
            />

            <ProtectedRoute
              // logged in shows Description else shows LoginPage
              exact
              path="/description"
              component={ Description }
            />

            <ProtectedRoute
              // logged in shows DressMe else shows LoginPage
              exact
              path="/dressMe"
              component={ DressMe }
            />

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
         
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/login"
              component={LoginPage}
              authRedirect="/user"
            />
            
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              component={RegisterPage}
              authRedirect="/user"
            />
            
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              component={LandingPage}
              authRedirect="/user"
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => 
            <div>
              <Typography variant='h5' 
                  style={{ textAlign: 'center', margin: 20 }}>
                  Bummer! Page not found.
              </Typography>
              <iframe src="https://giphy.com/embed/3ohfFucMqPjwFq5f7W" 
                width="480" 
                height="270" 
                frameBorder="0" 
                class="giphy-embed" 
                allowFullScreen>
              </iframe>
            </div>} />
          </Switch>
          <Footer />
        </div>
      </Router>
        </ThemeProvider>
      </StyledEngineProvider>
    );
}

export default connect()(App);
