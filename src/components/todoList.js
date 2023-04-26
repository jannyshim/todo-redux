import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./todoListItem";

const TodoList = () => {
  const allTodos = useSelector((state) => state.todos);

  const MappedTodo = allTodos
    .sort((a, b) => b.id - a.id)
    .map((todo, id) => <TodoListItem key={id} todo={todo} />);

  return <ul>{MappedTodo}</ul>;
};

export default TodoList;
