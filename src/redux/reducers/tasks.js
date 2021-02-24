import { ADD_TASK, END_TASK } from '../actionsConsts';

const INITIAL_STATE = {
    myTasks: [],
    completedTasks: [],
    deletedTasks: []
}

function removeItem(array, itemToRemove) {

    return array.filter((item, index) => item !== itemToRemove)
    
}

function tasks(state = INITIAL_STATE, action){
    switch(action.type){
        case ADD_TASK:
            return { ...state, myTasks: [...state.myTasks, action.payload]}
        case END_TASK:
            return {...state, 
                myTasks:  removeItem(state.myTasks, action.payload), 
                completedTasks: [...state.completedTasks, action.payload]
            }
        default :
            return state
    }
}

export default tasks