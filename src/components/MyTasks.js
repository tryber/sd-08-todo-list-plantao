import React from 'react';
import { connect } from 'react-redux';

import { endTask as endTaskAction} from '../redux/actions'

class MyTasks extends React.Component {
    render(){
        const { tasks, endTask } = this.props; 
        return(
            <>
                <ul>
                    {tasks.map(task => (
                        <li key={task}>
                            <button type='button' onClick={() => endTask(task)}>{task}</button>
                            <button type='button' onClick={() => console.log('ok')}>del</button>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks.myTasks
})

const mapDispatchToProps = (dispatch) => ({
    endTask: (task) => dispatch(endTaskAction(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyTasks)