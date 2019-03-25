export default state => next => action => {
  console.log("next(action) in async middleware");
  if (!action.payload || !action.payload.then) {
    console.log("Next(action) if its not promise");
    return next(action);
  }

  console.log("dispatch if its promise");
  action.payload.then(response =>
    state.dispatch({ ...action, payload: response })
  );
};

// This is not a hard requirement. Redux middleware did not have to be
// written in this way. The author of Redux could have definitely figure
// out a way to write just one single function to be called with
// state, next and action as arguments!
//
// export default (state, next, action) => {
//
// }
