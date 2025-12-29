const loggerMiddleware = store => next => action => {
  const state = store.getState();

  if (!state.auth.isAuthenticated && action.type !== "LOGIN") {
    console.log("User not authenticated");
  }

  return next(action);
};

export default loggerMiddleware;
