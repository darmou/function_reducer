const functionReducer = (state: any | null, action: any) => {
  const {action_fn, ...params} = action;
  if  (typeof action_fn === "function") {
      return  action_fn({state, ...params});
  } else {
      return state;
  }
}

// Optional function to help with debugging
export const logReducer = (functionReducer : (state: any | null, action: any) => any, state: any | null, action: any) => {
    const {action_fn, ...params} = action;
    console.log(`${new Date().toISOString()} | name: ${action_fn?.name}, params: ${JSON.stringify(params)}`);
    return functionReducer(state, action);
};

export { functionReducer as default };
