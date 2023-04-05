import React from 'react';

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.completed} onChange={() => props.handleChange(props.id)} />
      <p>{props.text}</p>
      <button onClick={() => props.deleteTask(props.id)}>Удалить</button>
    </div>
  );
}

export default TodoItem;