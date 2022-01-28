import React from 'react'
import {TodoList} from './TodoList'
import {TodoForm} from './TodoForm'
import '../styles/Todo.css'


export const TodoBox = () => {
    return (   
    <div className="well vert-offset-top-2 vert-offset-top-0">
        <h1 className="">To do</h1>
        <TodoList/>
        <TodoForm />
    </div>
    );

}