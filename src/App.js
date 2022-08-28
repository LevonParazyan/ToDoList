import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        setTodos([todo, ...todos])
    }

    function doneTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                    ...todo,
                    completed: !todo.completed
                };
                }
            return todo;
            })
        );
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return(
        <div style={{
            textAlign: 'center'
        }}>
            <p>TODOS</p>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} doneTodo={doneTodo} deleteTodo={deleteTodo} />
        </div>
    ) 
}

export default App;