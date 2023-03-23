import React, { useEffect, useState } from 'react';
import TodoDisplay from '../TodoDisplay/TodoDisplay';
import './Todo.css'




const Todo = () => {
    const [todo, setTodo] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data =>setTodo(data))
    },[])
    return (
        <div className='todo'>
            {
                todo.map(todo =><TodoDisplay contents={todo}></TodoDisplay>)
            }
        </div>
    );
};

export default Todo;