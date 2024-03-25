import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './todo';
import themesReducer from './themesReducer';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    themes: themesReducer,
  }
});

export default store;
