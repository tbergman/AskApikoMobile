import React from 'react';
import { View, Text } from 'react-native';
import { DrawerButton } from '../../components';
import s from './styles';

const ProfileScreenView = () => (
  <View style={s.container}>
    <Text>Profile page</Text>
  </View>
);

ProfileScreenView.propTypes = {};

ProfileScreenView.navigationOptions = ({ navigation }) => ({
  title: 'Profile',
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
});

export default ProfileScreenView;
