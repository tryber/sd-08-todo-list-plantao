import { createStore } from 'redux';

import rootReducer from '../reducers'
//import tasksReducer from '../reducers/tasks'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store