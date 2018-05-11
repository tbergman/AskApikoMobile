import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles';

const ProfileScreenView = () => (
  <View style={styles.container}>
    <Text>Profile page</Text>
  </View>
);

ProfileScreenView.propTypes = {};

ProfileScreenView.navigationOptions = ({ navigation }) => ({
  title: 'Profile',
  headerLeft: <Text onPress={() => navigation.toggleDrawer()}>Drawer</Text>,
});

export default ProfileScreenView;
