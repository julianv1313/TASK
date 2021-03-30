import React from 'react'
import { TaskListContainer } from '../TaskListContainer/TaskListContainer'

export const MainTaskComponent = () => {
    const todoList=[{ task: 'first task'}]
    return (
        <div>
            <TaskListContainer todoList={todoList} />
        </div>
    )
}
