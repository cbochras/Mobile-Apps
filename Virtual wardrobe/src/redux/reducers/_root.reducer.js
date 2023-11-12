import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import clothing from './clothing.reducer';
import recentClothing from './recent.clothing.reducer';
import types from './type.reducer';
import recentType from './recent.type.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  clothing, // will hold the clothing from user's wardrobe if logged in
  types, // will hold the types of clothing
  recentClothing, // will hold the most recent selected clothing item
  recentType // will hold the most recent selected clothing type
  });

export default rootReducer;
