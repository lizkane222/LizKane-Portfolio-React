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
            placeholder="Know a book that should be on this list?"/>
            <input 
            type="text" 
            className="input" 
            value={value} 
            onChange={e => setValue(e.target.value)} 
            placeholder="Know a book that should be on this list?"/>
            <input 
            type="text" 
            className="input" 
            value={value} 
            onChange={e => setValue(e.target.value)} 
            placeholder="Know a book that should be on this list?"/>
            <input 
            type="text" 
            className="input" 
            value={value} 
            onChange={e => setValue(e.target.value)} 
            placeholder="Know a book that should be on this list?"/>
        </form>
    )
}

export default TodoForm;