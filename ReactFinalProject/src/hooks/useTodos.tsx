import { atom, useAtom } from 'jotai';
import { Todo } from '../types/Todo';

const todosAtom = atom<Todo[][]>([[], [], []]);

export function useTodos() {
  const [todos, setTodos] = useAtom(todosAtom);

  const addTodo = (newTodo: Todo) => {
    const newTodos = [...todos];
    newTodos[0].push(newTodo);
    setTodos(newTodos);
  };

  const updateTodo = (id: string, updatedTodo: Todo) => {
    const newTodos = todos.map((todoColumn) =>
      todoColumn.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
    setTodos(newTodos);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.map((todoColumn) =>
      todoColumn.filter((todo) => todo.id !== id)
    );
    setTodos(newTodos);
  };

  return { todos, setTodos, addTodo, updateTodo, deleteTodo };
}
