import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { Touchable, DrawerButton } from '../../components';
import s from './styles';

const SignUpScreenView = ({ navigateToSignIn, signUp }) => (
  <View style={s.container}>
    <Touchable onPress={navigateToSignIn}>
      <Text>Already has an account?</Text>
    </Touchable>
    <Touchable onPress={signUp}>
      <Text>signUp</Text>
    </Touchable>
  </View>
);

SignUpScreenView.propTypes = {
  navigateToSignIn: T.func,
  signUp: T.func,
};

SignUpScreenView.navigationOptions = ({ navigation }) => ({
  title: 'SignUp',
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
});

export default SignUpScreenView;
