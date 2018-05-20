import { connect } from 'react-redux';
import { compose } from 'recompose';
import { viewerSelectors } from '../../modules/viewer';
import ProfileScreenView from './ProfileScreenView';

const mapStateToProps = state => ({
  viewer: viewerSelectors.getViewer(state),
});

const mapDispatchToProps = {};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(ProfileScreenView);
