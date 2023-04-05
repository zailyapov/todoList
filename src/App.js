import React, { useState } from 'react';
import TodoItem from './TodoItem.js';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleChange(id) {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
    })
  }

  function addTask() {
    if (inputValue.trim() !== '') {
      setTasks(prevTasks => {
        return [...prevTasks, { id: prevTasks.length, text: inputValue, completed: false }]
      })
      setInputValue('');
    }
  }

  function deleteTask(id) {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.id !== id)
    })
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="add-task">
        <input placeholder='Введите задачу' type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button onClick={addTask}>Добавить</button>
      </div>
      {tasks.map(task => (
        <TodoItem key={task.id} id={task.id} text={task.text} completed={task.completed} handleChange={handleChange} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default App;
