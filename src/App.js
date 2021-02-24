import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store'

import MyTasks from './components/MyTasks'
import InputTask from './components/InputTask'
import CompletedTask from './components/CompletedTask'

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <h2>Minha lista de tarefas</h2>
          <MyTasks />
          <InputTask />
          <hr />
          <CompletedTask />
        </div>
      </Provider>
    );
  }
}

export default App;
