import { ADD_TASK, END_TASK } from '../actionsConsts'


export function addTask(task){
    return {
        type: ADD_TASK,
        payload: task
    }
}

export function endTask(task){
    return {
        type: END_TASK,
        payload: task
    }
}