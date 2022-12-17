import { TextField, Typography } from '@mui/material';
import { Box, Button } from '@mui/material';
import React from 'react';
import { useTodos } from '../hooks/useTodos';
import { Todo } from '../types/Todo';

type TodoProps = {
  todo: Todo;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

export function TodoCard({ todo, isEditing, setIsEditing }: TodoProps) {
  const { updateTodo, deleteTodo } = useTodos();
  const [todoTitle, setTodo] = React.useState(todo.title);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTodo(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateTodo(todo.id, {
      id: todo.id,
      createdAt: todo.createdAt,
      updatedAt: `${Date.now()}`,
      title: todoTitle,
    });
    setIsEditing(false);
  };

  const dateFormatter = (stringDate: string) => {
    const date = new Date(parseInt(stringDate));
    return date.toLocaleString();
  };

  return (
    <Box m={2} p={2} borderRadius="4px" bgcolor="#ffffff">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="title"
            value={todoTitle}
            onChange={handleChange}
          />
          <Box
            mt={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between">
            <Button variant="contained" type="submit">
              Save
            </Button>

            <Button
              type="button"
              variant="outlined"
              color="error"
              onClick={() => deleteTodo(todo.id)}>
              Delete
            </Button>
          </Box>
        </form>
      ) : (
        <>
          <Typography mb={1} color="#000000" fontSize="18px" fontWeight="600">
            {todo.title}
          </Typography>
          <Typography color="#24232c" fontSize="12px">
            {dateFormatter(todo.updatedAt)}
          </Typography>
        </>
      )}
    </Box>
  );
}
