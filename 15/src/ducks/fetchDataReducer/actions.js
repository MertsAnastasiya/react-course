import {
  GET_DATA_REQUESTED,
  GET_ADD_DATA_REQUESTED,
  GET_DATA_SUCCEEDED,
  GET_ADD_DATA_SUCCEEDED,
  GET_DATA_FAILED,
  CLEAR_ADD_DATA
} from './types';

const ACTION_GET_DATA_REQUESTED = (path) => ({
  type: GET_DATA_REQUESTED,
  path
});

const ACTION_GET_DATA_SUCCEEDED = ({data}) => ({
    type: GET_DATA_SUCCEEDED,
    data
});

const ACTION_GET_ADD_DATA_REQUESTED = (path) => ({
  type: GET_ADD_DATA_REQUESTED,
  path
});

const ACTION_GET_ADD_DATA_SUCCEEDED = ({data}) => ({
  type: GET_ADD_DATA_SUCCEEDED,
  data
});

const ACTION_GET_DATA_FAILED = (error) => ({
  type: GET_DATA_FAILED,
  payload: error
});

const ACTION_CLEAR_ADD_DATA = {
  type: CLEAR_ADD_DATA,
}


export { 
    GET_DATA_REQUESTED, 
    GET_ADD_DATA_REQUESTED, 
    GET_DATA_SUCCEEDED, 
    GET_ADD_DATA_SUCCEEDED, 
    GET_DATA_FAILED, 
    CLEAR_ADD_DATA,
    ACTION_GET_DATA_REQUESTED,
    ACTION_GET_DATA_SUCCEEDED,
    ACTION_GET_ADD_DATA_REQUESTED,
    ACTION_GET_ADD_DATA_SUCCEEDED,
    ACTION_GET_DATA_FAILED,
    ACTION_CLEAR_ADD_DATA,
};