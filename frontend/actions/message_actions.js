import * as MessageUtil from "../util/message_util";
export const MESSAGE_SUCCESS = "MESSAGE_SUCCESS";
export const MESSAGE_REQUEST = "MESSAGE_REQUEST";
export const MESSAGES_REQUEST = "MESSAGES_REQUEST";
export const MESSAGES_SUCCESS = "MESSAGES_SUCCESS";
export const CREATE_MESSAGE_REQUEST = "CREATE_MESSAGE_REQUEST";
export const UPDATE_MESSAGE_REQUEST = "UPDATE_MESSAGE_REQUEST";
export const REMOVE_MESSAGE_REQUEST = "REMOVE_MESSAGE_REQUEST";
export const MESSAGE_FAILURE = "MESSAGE_FAILURE";
export const REMOVE_MESSAGE_SUCCESS = "REMOVE_MESSAGE_SUCCESS";
export const CLEAR_MESSAGE_ERRORS = "CLEAR_MESSAGE_ERRORS";

export const createMessage = message => {
  return dispatch => {
    dispatch({ type: CREATE_MESSAGE_REQUEST });

    return MessageUtil.createMessage(message).then(
      message => dispatch(receiveMessage(message)),
      errors => dispatch(receiveMessageErrors(errors))
    );
  };
};

export const fetchMessage = id => {
  return dispatch => {
    dispatch({ type: MESSAGE_REQUEST });

    return MessageUtil.fetchMessage(id).then(
      message => dispatch(receiveMessage(message)),
      errors => dispatch(receiveMessageErrors(errors))
    );
  };
};

export const fetchMessages = () => {
  return dispatch => {
    dispatch({ type: MESSAGES_REQUEST });

    return MessageUtil.fetchMessages().then(
      messages => dispatch(receiveMessages(messages)),
      errors => dispatch(receiveMessageErrors(errors))
    );
  };
};

export const updateMessage = message => {
  return dispatch => {
    dispatch({ type: UPDATE_MESSAGE_REQUEST });

    return MessageUtil.updateMessage(message).then(
      message => dispatch(receiveMessage(message)),
      errors => dispatch(receiveMessageErrors(errors))
    );
  };
};

export const deleteMessage = id => {
  return dispatch => {
    dispatch({ type: REMOVE_MESSAGE_REQUEST });

    return MessageUtil.deleteMessage(id).then(
      message => dispatch(removeMessage(message)),
      errors => dispatch(removeMessage(errors))
    );
  };
};

export const receiveMessage = ({ message, comments }) => ({
  type: MESSAGE_SUCCESS,
  message,
  comments
});

const receiveMessages = ({ messages }) => {
  return ({
  type: MESSAGES_SUCCESS,
  messages
})};

const removeMessage = ({ message }) => ({
  type: REMOVE_MESSAGE_SUCCESS,
  message
});

export const receiveMessageErrors = errors => ({
  type: MESSAGE_FAILURE,
  errors
});
