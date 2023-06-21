import React from 'react';
import './TodoList.css'

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul>
    {todos.map(({ id, text }) => (
      <li className='TodoList__item' key={id}>
        <p className='TodoList__text'>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
