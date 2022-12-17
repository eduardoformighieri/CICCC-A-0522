import React from 'react';
import { TodoCard } from './TodoCard';
import { useTodos } from '../hooks/useTodos';
import { TextField, Button, Box, Container, Typography } from '@mui/material';
import { nanoid } from 'nanoid';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableLocation,
} from 'react-beautiful-dnd';
import { Todo } from '../types/Todo';

const reorder = (list: Todo[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (
  source: Todo[],
  destination: Todo[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: {
    [key: string]: Todo[];
  } = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

export function TodoList() {
  const [todoTitle, setTodo] = React.useState('');
  const [isEditing, setIsEditing] = React.useState(false);

  const { todos, setTodos, addTodo } = useTodos();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTodo(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo({
      id: nanoid(),
      createdAt: `${Date.now()}`,
      updatedAt: `${Date.now()}`,
      title: todoTitle,
    });
    setTodo('');
  };

  function onDragEnd(result: DropResult) {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(todos[sInd], source.index, destination.index);
      const newState: any = [...todos];
      newState[sInd] = items;
      setTodos(newState);
    } else {
      const result = move(todos[sInd], todos[dInd], source, destination);
      const newState = [...todos];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setTodos(newState);
    }
  }

  const todoColumnTitles = ['Backlog', 'In Progress', 'Done'];

  return (
    <Box>
      <Box display="flex" width="100%" p={2} bgcolor="#1976d2">
        <Typography fontSize="20px" color="#ffffff" fontWeight="bold">
          Todo App
        </Typography>
      </Box>

      <Box maxWidth="932px" width="100%" mx="auto">
        <Box
          my={4}
          display="flex"
          width="100%"
          justifyContent="space-between"
          alignItems="center">
          <form onSubmit={handleSubmit}>
            <Box display="flex" alignItems="center" gap={2}>
              <TextField
                variant="outlined"
                label="Todo"
                name="title"
                value={todoTitle}
                onChange={handleChange}
              />

              <Button variant="contained" type="submit">
                Add todo
              </Button>
            </Box>
          </form>
          <Button
            variant="contained"
            type="button"
            onClick={() => setIsEditing(!isEditing)}>
            Edit
          </Button>
        </Box>

        <Box display="flex" width="100%" justifyContent="center" gap="16px">
          <DragDropContext onDragEnd={onDragEnd}>
            {todos.map((todoColumn, ind) => (
              <Box>
                <Typography
                  fontSize="20px"
                  mb={2}
                  color="#34333d"
                  fontWeight="bold">
                  {todoColumnTitles[ind]}
                </Typography>
                <Droppable key={ind} droppableId={`${ind}`}>
                  {(provided, snapshot) => (
                    <Box
                      sx={{
                        '&::-webkit-scrollbar': {
                          display: 'none',
                        },
                      }}
                      width="300px"
                      bgcolor="#1976d2"
                      height="600px"
                      overflow="auto"
                      borderRadius="8px"
                      ref={provided.innerRef}
                      {...provided.droppableProps}>
                      {todoColumn.map((todo: Todo, index: any) => (
                        <Draggable
                          key={todo.id}
                          draggableId={todo.id}
                          index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}>
                              <TodoCard
                                key={todo.id}
                                todo={todo}
                                isEditing={isEditing}
                                setIsEditing={setIsEditing}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Box>
                  )}
                </Droppable>
              </Box>
            ))}
          </DragDropContext>
        </Box>
      </Box>
    </Box>
  );
}
