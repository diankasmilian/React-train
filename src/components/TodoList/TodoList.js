import React from 'react';
import classNames from 'classnames';
import './TodoList.scss'

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul>
    {todos.map(({ id, text, completed }) => (
      <li className={classNames('TodoList__item', {
        'TodoList__item--completed': completed,
      })} key={id}>
         <input
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className='TodoList__text'>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
