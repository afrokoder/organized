import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import './Todo.css';

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemText primary={props.text} secondary="Due Date:" />
      </ListItem>
      {/* <li>{props.todo}</li> */}
    </List>
  );
}

export default Todo;
