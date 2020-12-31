import React from "react";
import "./todo.css"

const Todo = ({ todo, index, completeTodo, deleteTodo}) =>{
    return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
        {todo.text}
        <div>
            <button onClick={() => completeTodo(index)} style={{color: todo.isCompleted ? 'green' : 'red'}}>✓</button>
            <button onClick={() => deleteTodo(index)} style={{color: todo.isCompleted ? 'red' : ''}}>ⓧ</button>
        </div>
    </div>);
}

export default Todo;