import { compose, hoistStatics, withHandlers } from 'recompose';
import SignInScreenView from './SignInScreenView';
import { screens } from '../../navigation';

const enhancer = compose(
  withHandlers({
    navigateToRestorePassword: props => () => props.navigation.navigate(screens.RestorePassword),
    signIn: props => () => props.navigation.navigate(screens.AuthorizedApplication),
  }),
);

export default hoistStatics(enhancer)(SignInScreenView);
