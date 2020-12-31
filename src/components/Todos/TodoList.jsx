import React, {useState} from 'react';

import './todo.css';
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([
      {
        text: 'You can leave a comment below.',
        isCompleted: false
      },
      {
        text: "OR if you'd like, email Liz Kane at lizkane222@gmail.com",
        isCompleted: false
      },

    ]);
    
    const addTodo = (text) => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };

    const completeTodo = (index) => {
      const newTodoList = [...todos];
      newTodoList[index].isCompleted = true;
      setTodos(newTodoList)
    }

    const deleteTodo = (index) => {
      const newTodoList = [...todos];
      newTodoList.splice(index, 1);
      setTodos(newTodoList)
    }

    return (
      <div className="appi">
          <div className="todo-list">
            {todos.map((todo, index) => (
                <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
            ))}
            <div>
              <TodoForm addTodo={addTodo}/>
            </div>
          </div>
      </div>
    )
}

export default TodoList;