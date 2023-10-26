import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Task Manager</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
