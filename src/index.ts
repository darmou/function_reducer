import hash from "object-hash";

const cache: any = {};
interface Key  {
    params: any,
    action_fn_name: string,
    state_md5: string
}

//Simple memoization
const functionCache = (params: any, action_fn: any, state: any) => {
    const keyObj: Key = {
        params,
        action_fn_name: action_fn.name,
        state_md5: hash(state)
    }
    const keyStr = JSON.stringify(keyObj);
    if (!cache.hasOwnProperty(keyStr)) {
        cache[keyStr] = action_fn({state, ...params});
    }
    return cache[keyStr];
}

const functionReducer = (state: any | null, action: any) => {
  const {action_fn, ...params} = action;
  if  (typeof action_fn === "function") {
      return functionCache(params, action_fn, state);
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
