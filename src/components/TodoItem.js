import React from 'react';

function TodoItem({ todo, doneTodo, deleteTodo }) {
    function handleCheckboxState() {
        doneTodo(todo.id);
    }

    function handleDeletion() {
        deleteTodo(todo.id)
    }

    return(
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '20%',
            margin: '10px auto'
        }}>
            <input type="checkbox" onClick={handleCheckboxState} />
            <li style={{
                textDecoration: todo.completed ? 'line-through' : null,
                listStyle: 'none'
            }}>{todo.text}</li>
            <button onClick={handleDeletion}>X</button>
        </div>
    )
}

export default TodoItem;