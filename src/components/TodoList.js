import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, doneTodo, deleteTodo }) {
    return (
        <ul style={{
            justifyContent: 'center',
            padding: '0'
        }}>
            {
                todos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        doneTodo={doneTodo} 
                        deleteTodo={deleteTodo} 
                    />
                ))
            }
        </ul>
    )
}

export default TodoList;