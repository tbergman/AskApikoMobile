import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { Touchable, DrawerButton, OptionsButton } from '../../components';
import s from './styles';

const UserQuestionsScreenView = ({ navigateToUserQuestion }) => (
  <View style={s.container}>
    <Touchable onPress={navigateToUserQuestion}>
      <Text>Go to Question page!</Text>
    </Touchable>
  </View>
);

UserQuestionsScreenView.propTypes = {
  navigateToUserQuestion: T.func,
};

UserQuestionsScreenView.navigationOptions = ({ navigation }) => ({
  title: 'Home',
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  headerRight: <OptionsButton onPress={() => navigation.toggleDrawer()} />,
});

export default UserQuestionsScreenView;
