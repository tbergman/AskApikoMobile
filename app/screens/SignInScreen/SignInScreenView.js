import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { Touchable } from '../../components';
import { headerStyles } from '../../styles';
import s from './styles';

const SignInScreenView = ({ navigateToRestorePassword, signIn }) => (
  <View style={s.container}>
    <Touchable onPress={navigateToRestorePassword}>
      <Text>Forgot password?</Text>
    </Touchable>
    <Touchable onPress={signIn}>
      <Text>SignIn</Text>
    </Touchable>
  </View>
);

SignInScreenView.propTypes = {
  navigateToRestorePassword: T.func,
  signIn: T.func,
};

SignInScreenView.navigationOptions = {
  title: 'SignIn',
  ...headerStyles,
};

export default SignInScreenView;
