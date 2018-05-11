import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './styles';

const RestorePasswordScreenView = () => (
  <View style={s.container}>
    <Text>Restore password page</Text>
  </View>
);

RestorePasswordScreenView.propTypes = {};

RestorePasswordScreenView.navigationOptions = {
  title: 'Restore password',
};

export default RestorePasswordScreenView;
