import './App.css';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTodo, clearTodos, getTodos } from './actions/todo';
import { changeTheme } from './actions/themes';

function App(props) {
  const { todos, isDark } = props;
  const dispatch = useDispatch();
  const addNewTask = () => {
    console.log('App >> addNewTask');
    dispatch(addTodo());
  };
  const clearAllTasks = () => {
    console.log('App >> clearAllTasks');
    dispatch(clearTodos());
  };
  const toggleTheme = () => {
    console.log('App >> toggleTheme');
    dispatch(changeTheme());
  };
  useEffect(() => {
    console.log('App >> useEffect >> getTodos');
    dispatch(getTodos());
  }, [dispatch])
  return (
    <div className="App">
      <header className="App-header" style={{
        background: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <button onClick={addNewTask}>Add todo</button>
          <button onClick={clearAllTasks}>Clear all</button>
          <button onClick={toggleTheme}>Change theme</button>
        </div>
        <br />
        TODOS:
        {
          (todos.length > 0)
          ? 
          todos.map(todo => <p>{todo}</p>)
          : null
        }
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { todos, themes: { isDark } } = state;
  console.log('current theme is ', isDark);
  return { todos, isDark };
};

export default connect(mapStateToProps)(App);
