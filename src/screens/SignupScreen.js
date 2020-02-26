import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
   const { state, signup, clearErrorMessage } = useContext(Context);

   return (
      <View style={styles.container}>
         <NavigationEvents
            onWillBlur={clearErrorMessage}
         />
         <AuthForm
            headerText="Sign Up for Tracker"
            errorMessage={state.errorMessage}
            onSubmit={signup}
            submitButtonText="Sign Up"
         />
         <NavLink
            text="Already have an account? Sign in instead"
            routeName="Signin"
         />
      </View>
   )
};

SignupScreen.navigationOptions = () => {
   return {
      headerShown: false
   }
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      marginBottom: 250
   }
});

export default SignupScreen;