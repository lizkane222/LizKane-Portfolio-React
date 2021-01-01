import React, {useState} from "react";

const TodoForm= ({ addTodo }) => {
    const [value, setValue] = useState('');
    
    const handleSubmit= (e) => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    }

    return(
        <form onSubmit={handleSubmit} className="comment-form">
            <input 
            type="text" 
            className="input" 
            value={value} 
            onChange={e => setValue(e.target.value)} 
            placeholder="Leave a comment for Liz"/>
        </form>
    )
}

export default TodoForm;