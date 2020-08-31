# Introduction
The normal way to use a reducer is to have a switch statement with the action having a type and payload.  This reducer makes it easier to function 

# To use this function reducer:
```
import function_reducer from "function_reducer";
import todosStore from "./todosStore";


function App() {
  const [state, dispatch] = React.useReducer(function_reducer, initialState);


 ....
   const addTodo = () => {
      dispatch({action_fn: todosStore.add, todo});
      setTodo(initialTodo);
  }

}
```
Where todo is a named parameter (`{todo: todo}).

Below is the todosStore:
```
import produce from "immer";

export default  {
  add: ({state, todo}) => {
      return {...state, todos: [...state.todos, todo]}
  },

  update: ({state, index, todo}) => {
    return produce(state, draftState => {
      draftState.todos[index] = {...draftState.todos[index], ...todo};
    });
  },

  delete: ({state, index}) => {
    return produce(state, draftState => {
      draftState.todos.splice(index, 1);
    });
  }
}
```
