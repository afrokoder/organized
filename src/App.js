import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
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
      <h1>Things To Buy / ToDo</h1>

      <form>
        <FormControl>
          <InputLabel>Add an Item</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        {/* <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        /> */}
        <Button
          type="submit"
          disabled={!input}
          onClick={addTodo}
          variant="contained"
          color="primary"
          size="small"
        >
          Add ToDo
        </Button>
        {/* <button type="submit" onClick={addTodo}>
          Add ToDo
        </button> */}
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
        <li></li>
      </ul>
    </div>
  );
}

export default App;
