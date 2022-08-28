import React, { useState } from 'react';
import { v4 } from 'uuid';

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        text: "",
        completed: false,
    });

    function handleChangedInput(e) {
        setTodo({ ...todo, text: e.target.value });
    }

    function handleSubittion(e) {
        e.preventDefault();
        if(todo.text.trim()) {
            addTodo({ ...todo, id: v4() });
            setTodo({ ...todo, text: "" });
        }
    }

    return(
        <form onSubmit={handleSubittion}>
            <input 
                name="text"
                type="text"
                value={todo.text}
                onChange={handleChangedInput}
            />
            <button type="submit">ADD</button>
        </form>
    )
}

export default TodoForm;