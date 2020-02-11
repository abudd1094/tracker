import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
   switch (action.type) {
      default:
         return state;
   }
};

// SIGN UP
const signup = (dispatch) => {
   return ({ email, password }) => {
      // make api request to sign up with that email and password

      // if we sign up, modify our state, and say we are authenticated

      // if signing up fails, reflect an error message
   };
};

// SIGN IN
const signin = (dispatch) => {
   return ({ email, password }) => {
   };
};

// SIGN OUT
const signout = (dispatch) => {
   return ({ email, password }) => {
   };
};

export const { Provider, Context } = createDataContext(
   authReducer,
   { signin, signout, signup },
   { isSignedIn: false }
);