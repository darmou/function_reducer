const function_reducer = (state: any, action: any) => {
  const {action_fn, ...params} = action;
  if  (typeof action_fn === "function") {
      return  action_fn({state, ...params});
  } else {
      return state;
  }

}

export { function_reducer as default };
