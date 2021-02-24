import React from 'react';
import { connect } from 'react-redux';


class CompletedTask extends React.Component {
    render(){
        const { tasks } = this.props; 
        return(
            <> 
                <h2>Tarefas concluídas</h2>
                <ul>
                    {tasks.map(task => (
                        <li key={task}>
                            {task}
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks.completedTasks
})


export default connect(mapStateToProps)(CompletedTask)