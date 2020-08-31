exports.function_reducer = function(state, action) {
  const {action_fn, ...params} = action;
  return  action_fn({state, ...params});
}
