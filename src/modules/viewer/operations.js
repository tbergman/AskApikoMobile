import * as actions from './actions';
import Api from '../../api';

export const getViewer = () => async (dispatch) => {
  try {
    dispatch(actions.getViewerStart());

    const res = await Api.getUserData();

    dispatch(actions.getViewerSuccess(res.data.user));
  } catch (err) {
    const { code } = err.response.data;
    
    dispatch(actions.getViewerError({ code }));
    throw new Error(code);
  }
};
