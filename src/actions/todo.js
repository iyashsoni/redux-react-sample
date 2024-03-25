import { ADD_TODO, CLEAR_TODOS, GET_TODOS } from './ActionTypes';

export const getTodos = () => {
  console.log('dispatching.... getTodos');
  return { type: GET_TODOS };
};

export const addTodo = () => {
  console.log('dispatching.... addTodo');
  return { type: ADD_TODO };
};

export const clearTodos = () => {
  console.log('dispatching.... clearTodos');
  return { type: CLEAR_TODOS };
};
