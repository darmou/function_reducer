import { ReducerStateWithoutAction, ReducerWithoutAction } from "react";
import hash from "object-hash";

const cache: any = {};
interface Key  {
    params: any,
    action_fn_name: string,
    state_md5: string
}

interface FRFunction extends Function {
    name: string;
}

//Simple memoization
const functionCache = <R extends ReducerWithoutAction<FunctionReducerAction>>(params: Pick<FunctionReducerAction, never>, action_fn: FRFunction, state: React.ReducerStateWithoutAction<R> | null) => {
    const keyObj: Key = {
        params,
        action_fn_name: action_fn.name,
        state_md5: hash(state)
    }
    const keyStr = JSON.stringify(keyObj);
    if (!cache.hasOwnProperty(keyStr) && typeof action_fn === 'function') {
        cache[keyStr] = action_fn({state, ...params});
    }
    return cache[keyStr];
}

interface FunctionReducerAction {
    action_fn: FRFunction,
}

const functionReducer = <R extends ReducerWithoutAction<FunctionReducerAction>>(state: ReducerStateWithoutAction<R> | null,
                                                              action: FunctionReducerAction) => {
  const {action_fn, ...params} = action;
  if  (typeof action_fn === "function") {
      return functionCache(params, action_fn, state);
  } else {
      return state;
  }
}

// Optional function to help with debugging
export const logReducer = <R extends ReducerWithoutAction<FunctionReducerAction>>(functionReducer :
                                                                    (state: ReducerStateWithoutAction<R> | null,
                                                                     action: any) => any, state: any | null,
                                                                    action: FunctionReducerAction) => {
    const {action_fn, ...params} = action;
    console.log(`${new Date().toISOString()} | name: ${action_fn?.name}, params: ${JSON.stringify(params)}`);
    return functionReducer(state, action);
};

export { functionReducer as default };
