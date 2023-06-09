import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  todoChecked,
  fetchTodosFailure,
  fetchTodosSuccess,
} from "../module/todoAction";
import TodoListItem from "./TodoListItem";
import Header from "./Header";
import styled from "styled-components";

interface Todo {
  id: number;
  content: string;
  isChecked: boolean;
  importance: string;
}

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;
const FilterSelect = styled.select`
  width: 30%;
  margin-left: auto;
  height: 1.7rem;
`;

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector((state: { todos: Todo[] }) => state.todos);
  const [selectedImportance, setSelectedImportance] = useState("전체");

  // 투두 불러오기
  const fetchTodos = async () => {
    try {
      const res = await axios.get<Todo[]>("http://localhost:3001/todos");
      dispatch(fetchTodosSuccess(res.data));
    } catch (error: any) {
      dispatch(fetchTodosFailure(error as Error));
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  // 새 투두 등록하기
  const addTodoList = async (text: string, select: string) => {
    try {
      const res = await axios.post<Todo>("http://localhost:3001/todos", {
        content: text,
        isChecked: false,
        importance: select,
      });
      dispatch(addTodo(res.data));
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };

  // 투두 수정
  const handleEditTodo = async (id: number, editContent: string) => {
    try {
      await axios.patch(`http://localhost:3001/todos/${id}`, {
        content: editContent,
      });
      dispatch(editTodo(id, editContent));
    } catch (error) {
      console.log(error);
    }
  };

  // 투두 삭제
  const handleDeleteTodo = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3001/todos/${id}`);
      dispatch(deleteTodo(id));
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };

  // 투두 완료 여부 체크
  const handleChecked = async (id: number, isChecked: boolean) => {
    try {
      await axios.patch(`http://localhost:3001/todos/${id}`, {
        isChecked: !isChecked,
      });
      dispatch(todoChecked(id, isChecked));
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };

  // const sortByImportance = (a, b) => {
  //   return b.importance - a.importance;
  // };

  const filterByImportance = (todo: Todo) => {
    if (selectedImportance === "전체") {
      return true;
    }
    return todo.importance === selectedImportance;
  };

  return (
    <TodoContainer>
      <h1>오늘의 할일</h1>
      <Header onAddTodo={addTodoList} />
      <FilterSelect
        value={selectedImportance}
        onChange={(e) => setSelectedImportance(e.target.value)}
      >
        <option value="전체">전체</option>
        <option value="중요도 ⭐️">중요도 ⭐️</option>
        <option value="중요도 🌟">중요도 🌟</option>
        <option value="중요도 ✨">중요도 ✨</option>
        <option value="중요도 💫">중요도 💫</option>
      </FilterSelect>
      {allTodos
        .sort((a, b) => b.id - a.id)
        .filter(filterByImportance)
        .map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onUpdateTodo={handleEditTodo}
            onDeleteTodo={handleDeleteTodo}
            onChecked={handleChecked}
          />
        ))}
    </TodoContainer>
  );
};

export default TodoList;
