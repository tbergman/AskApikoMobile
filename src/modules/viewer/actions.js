import { createAction } from 'redux-actions';
import * as types from './types';

export const getViewerStart = createAction(types.GET_VIEWER_START);
export const getViewerSuccess = createAction(types.GET_VIEWER_SUCCESS);
export const getViewerError = createAction(types.GET_VIEWER_ERROR);
