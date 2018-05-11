import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { DrawerButton } from '../../components';
import s from './styles';

const CreateQuestionScreenView = () => (
  <View style={s.container}>
    <Text>Create Question page</Text>
  </View>
);

CreateQuestionScreenView.propTypes = {};

CreateQuestionScreenView.navigationOptions = ({ navigation }) => ({
  title: 'Create question',
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
});

export default CreateQuestionScreenView;
