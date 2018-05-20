import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { DrawerButton, Logo, PageTitle, QuestionsList, Avatar } from '../../components';
import { globalStyles, headerStyles } from '../../styles';
import s from './styles';
import avatar from '../../../assets/images/profile.png';

const ProfileScreenView = ({ viewer }) => (
  <View style={[globalStyles.fillAll, s.container]}>
    <PageTitle title="Profile" />
    <View style={s.profileInfo}>
      <Avatar source={avatar} profile />
      <View>
        <Text style={s.userName}>{viewer.profile.fullName}</Text>
        <Text style={s.userEmail}>{viewer.email}</Text>
      </View>
    </View>
    <View style={s.postedContainer}>
      <Text style={s.postedTitle}>Posted questions</Text>
    </View>
    <QuestionsList />
  </View>
);

ProfileScreenView.propTypes = {
  viewer: T.shape({
    profile: T.object,
    email: T.string,
  }),
};

ProfileScreenView.navigationOptions = ({ navigation }) => ({
  headerTitle: <Logo header />,
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  headerRight: <View />,
  ...headerStyles,
});

export default ProfileScreenView;
