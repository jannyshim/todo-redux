import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  addTodo,
  fetchTodosFailure,
  fetchTodosSuccess,
} from "../module/todoAction";
import TodoList from "../components/todoList";
import Header from "../components/header";

const Todo = () => {
  const dispatch = useDispatch();
  // 투두 불러오기
  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:3001/todos");
      dispatch(fetchTodosSuccess(res.data));
    } catch (error) {
      dispatch(fetchTodosFailure(error));
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  // 새 투두 등록하기
  const addTodoList = async (text) => {
    try {
      const res = await axios.post("http://localhost:3001/todos", {
        content: text,
        isChecked: false,
      });
      dispatch(addTodo(res.data));
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header onAddTodo={addTodoList} />
      <TodoList />
    </div>
  );
};

export default Todo;
