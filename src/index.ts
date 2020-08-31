const function_reducer = (state: any, action: any) => {
  const {action_fn, ...params} = action;
  return  action_fn({state, ...params});
}

export { function_reducer as default };
