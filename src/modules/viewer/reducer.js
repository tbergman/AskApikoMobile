import { handleActions } from 'redux-actions';
import { authTypes } from '../auth';
import * as types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  setViewer: false,
  isGettingViewer: false,
  isGettingViewerError: null,
  viewer: null,
};

export default handleActions(
  {
    [types.GET_VIEWER_START]: mergeDeep({ isGettingViewer: true }),
    [types.GET_VIEWER_SUCCESS]: mergeDeep(({ payload }) => ({
      setViewer: true,
      isGettingViewer: false,
      isGettingViewerError: null,
      viewer: payload,
    })),
    [types.GET_VIEWER_ERROR]: mergeDeep(({ payload }) => ({
      sGettingViewer: false,
      isSignOutError: payload.message,
    })),

    [authTypes.SIGN_UP_SUCCESS]: mergeDeep(({ payload }) => ({
      setViewer: true,
      viewer: payload,
    })),
    [authTypes.SIGN_IN_SUCCESS]: mergeDeep(({ payload }) => ({
      setViewer: true,
      viewer: payload,
    })),
    [authTypes.SIGN_OUT_SUCCESS]: () => INITIAL_STATE,
  },
  INITIAL_STATE,
);
