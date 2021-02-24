import React from 'react';
import { connect } from 'react-redux'

import { addTask as addTaskAction} from '../redux/actions'

class InputTask extends React.Component {
    constructor(){
        super()

        this.handleChange = this.handleChange.bind(this)
        
        this.state = {
            taskText: ''
        }
    }

    handleChange(event){
        this.setState({
            taskText: event.target.value
        })
    }

    render(){
        const { taskText } = this.state;
        const { addTask } = this.props;
        return(
            <label>
                <h3>Incluir tarefa</h3>
                <input type="text" value={taskText} onChange={this.handleChange}/>
                <button type="button" onClick={() => addTask(taskText)}>Adicionar</button>
            </label>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addTask: (task) => dispatch(addTaskAction(task))
})

export default connect(null, mapDispatchToProps)(InputTask);