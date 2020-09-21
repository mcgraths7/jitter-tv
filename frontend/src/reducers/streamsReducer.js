import _ from 'lodash-core';

import {
  STREAMS_CREATE_STREAM,
  STREAMS_EDIT_STREAM,
  STREAMS_GET_STREAM,
  STREAMS_GET_ALL_STREAMS,
  STREAMS_DELETE_STREAM,
} from '../actions/types';

const INITIAL_STATE = {};

const streamsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case STREAMS_GET_ALL_STREAMS:
      return _.mapKeys(payload, 'id');
    case STREAMS_GET_STREAM:
      return { ...state, [payload.id]: payload };
    case STREAMS_CREATE_STREAM:
      return { ...state, [payload.id]: payload };
    case STREAMS_EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case STREAMS_DELETE_STREAM:
      return _.omit(state, payload);
    default:
      return state;
  }
};

export default streamsReducer;
