import {
  STREAMS_GET_ALL_STREAMS,
  STREAMS_GET_STREAM,
  STREAMS_CREATE_STREAM,
  STREAMS_EDIT_STREAM,
  STREAMS_DELETE_STREAM,
} from './types';
import apiServer from '../apis/api-server';

export const getAllStreams = () => async (dispatch) => {
  const response = await apiServer.get('/streams');
  dispatch({ type: STREAMS_GET_ALL_STREAMS, payload: response.data });
};

export const getOneStream = (streamId) => async (dispatch) => {
  const response = await apiServer.get(`/streams/${streamId}`);
  dispatch({ type: STREAMS_GET_STREAM, payload: response.data });
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await apiServer.post('/streams', {
    ...formValues,
    userId,
  });
  if (response.status === 201) {
    dispatch({ type: STREAMS_CREATE_STREAM, payload: response.data });
    return true;
  }
  return false;
};

export const editStream = (formValues, streamId) => async (dispatch) => {
  const response = await apiServer.put(`/streams/${streamId}`, formValues);
  dispatch({
    type: STREAMS_EDIT_STREAM,
    payload: response.data,
  });
};

export const deleteStream = (streamId) => async (dispatch) => {
  await apiServer.delete(`/streams/${streamId}`);
  dispatch({ type: STREAMS_DELETE_STREAM, payload: streamId });
};
