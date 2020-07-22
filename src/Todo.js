import React, { useState } from 'react';
import { List, ListItem, ListItemText, Modal, Button } from '@material-ui/core';
import './Todo.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { db } from './firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };
  const updateTodo = () => {
    db.collection('todos')
      .doc(props.todo.id)
      .set({ todo: input }, { merge: true });
    setOpen(false);
    setInput('');
  };

  return (
    <>
      <form>
        <List className="todo__list">
          <ListItem>
            <ListItemText primary={props.todo.todo} secondary="Due Date:" />
          </ListItem>
          <Button onClick={(e) => handleOpen()}>edit</Button>
          <DeleteForeverIcon
            onClick={(event) =>
              db.collection('todos').doc(props.todo.id).delete()
            }
          />
        </List>
        <Modal open={open} onClose={(e) => setOpen(false)}>
          <div className={classes.paper}>
            <h1>Edit Item</h1>
            <input
              placeholder={props.todo.todo}
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button type="submit" disabled={!input} onClick={updateTodo}>
              Update Todo
            </Button>
          </div>
        </Modal>
      </form>
    </>
  );
}

export default Todo;
