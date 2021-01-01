# Introduction
The normal way to use a reducer is to have a switch statement with the action having a type and payload.  This
reducer makes it easier to dispatch a function with some named parameters.

# To use this function reducer:
```
import functionReducer from "function_reducer";
import todosStore from "./todosStore";


function App() {
  const initialState = { todos: [], todo: null };
  const [state, dispatch] = React.useReducer(functionReducer, initialState);


 ....
   const addTodo = () => {
      dispatch({action_fn: todosStore.add, todo});
      setTodo(initialTodo);
  }

}
```
Where todo is a named parameter (`{todo: todo}`).

Below is the todosStore:
```
import produce from "immer";

export default  {
  add: function({state, todo}) {
      return {...state, todos: [...state.todos, todo]};
  },
  setTodo: function({state, todo}) {
    return produce(state, draftState => {
      draftState.todo = todo;
    });
  },
  update: function ({state, index, todo}) {
    return produce(state, draftState => {
      draftState.todos[index] = {...draftState.todos[index], ...todo};
    });
  },
  delete: function ({state, index}) {
    return produce(state, draftState => {
      draftState.todos.splice(index, 1);
    });
  }
}
```

## We can also use a logging middleware
```
import functionReducer, { logReducer } from "function_reducer";

function App() {
  const [state, dispatch] = React.useReducer((state, action) => logReducer(functionReducer, state, action), initialState);
  ....

```