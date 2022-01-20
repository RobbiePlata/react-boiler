import globalReducer from './global';

const mainReducer = ({ isLoading, isNavOpened }, action) => ({
  ...globalReducer({ isLoading, isNavOpened }, action),
});

export default mainReducer;