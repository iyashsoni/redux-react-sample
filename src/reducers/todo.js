import { ADD_TODO, CLEAR_TODOS, GET_TODOS } from '../actions/ActionTypes';

const initialState = [];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS: 
        return state;
    case ADD_TODO: 
      const newState = [...state];
      const newTodo = `My new task ${newState.length + 1}`;
      newState.push(newTodo);
      return newState;
    case CLEAR_TODOS: 
      return [];
    default:
      return state;
    }
}
