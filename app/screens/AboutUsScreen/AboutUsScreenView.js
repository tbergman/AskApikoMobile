import React from 'react';
import { WebView } from 'react-native';
import { DrawerButton } from '../../components';
import s from './styles';

const AboutUsScreenView = () => (
  <WebView style={s.container} source={{ uri: 'https://google.com' }} />
);

AboutUsScreenView.navigationOptions = ({ navigation }) => ({
  title: 'About us',
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
});

export default AboutUsScreenView;
