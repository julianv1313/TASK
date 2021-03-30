import React from 'react'
import { TaskView } from '../TaskComponent/TaskView'

export const TaskListContainer = ({todoList}) => {
    // llama las tareas
    // renderiza la lista
    return (
        <div>
            {todoList.map((element, idx) => <TaskView key={idx} task={element} />)}    
        </div>
    )
}
