import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Bread', 'Tomatoes', 'Eggs']);
  const [input, setInput] = useState('');
  const addTodo = (event) => {
    event.preventDefault(); //Will stop the page from refreshing
    setTodos([...todos, input]);
    setInput('');
  };
  return (
    <div className="App">
      <h1>Shopping List</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add ToDo
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}

        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
