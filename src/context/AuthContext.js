import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
   switch (action.type) {
      case 'add_error':
         return { ...state, errorMessage: action.payload };
      case 'signin':
         return { errorMessage: '', token: action.payload };
      case 'clear_error_message':
         return { ...state, errorMessage: '' };
      default:
         return state;
   }
};

// CLEAR ERROR MESSAGE
const clearErrorMessage = dispatch => () => {
   dispatch({ type: 'clear_error_message' });
};

// SIGN UP
const signup = (dispatch) => async ({ email, password }) => {
   // make api request to sign up with that email and password
   try {
      // if we sign up, modify our state, and say we are authenticated
      const res = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', res.data.token);
      dispatch({ type: 'signin', payload: res.data.token });

      navigate('TrackList');
   } catch (err) {
      // if signing up fails, reflect an error message
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
   }
};

// SIGN IN
const signin = (dispatch) => async ({ email, password }) => {
   try {
      const res = await trackerApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', res.data.token);
      dispatch({ type: 'signin', payload: res.data.token });

      navigate('TrackList');
   } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' })
   }
};

// SIGN OUT
const signout = (dispatch) => {
   return ({ email, password }) => {
   };
};

export const { Provider, Context } = createDataContext(
   authReducer,
   { signin, signout, signup, clearErrorMessage },
   { token: null, errorMessage: '' }
);