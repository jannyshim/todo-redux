import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, todoChecked } from "../module/todoAction";

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, content, isChecked } = todo;

  const deleteTodoList = async () => {
    try {
      await axios.delete(`http://localhost:3001/todos/${id}`);
      dispatch(deleteTodo(id));
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteClick = () => {
    deleteTodoList();
  };

  const handleCheckedClick = async () => {
    try {
      await axios.patch(`http://localhost:3001/todos/${id}`, {
        isChecked: !isChecked,
      });
      dispatch(todoChecked(id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <li key={id}>
      <input
        type="checkbox"
        defaultChecked={isChecked}
        onChange={handleCheckedClick}
      />
      {isChecked ? <s>{content}</s> : <span>{content}</span>}
      <button onClick={handleDeleteClick}>삭제</button>
    </li>
  );
};
export default TodoListItem;
