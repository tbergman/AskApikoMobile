import { createSelector } from 'reselect';
import R from 'ramda';

export const getViewer = createSelector(
  R.pathOr(0, ['viewer', 'viewer']),
  state => state,
);
