import axios from "axios";
import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { selectImportance } from "../module/todoAction";
import { ImportanceSelect } from "./ImportanceSelect";
import styled from "styled-components";

interface TodoListItemProps {
  todo: {
    id: number;
    content: string;
    isChecked: boolean;
    importance: string;
  };
  onUpdateTodo: (id: number, content: string) => void;
  onDeleteTodo: (id: number) => void;
  onChecked: (id: number, isChecked: boolean) => void;
}

const TodoListItemContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
  border-bottom: 1px dashed grey;
  padding-bottom: 8px;
  input {
    border: 1px solid black;
    border-radius: 3px;
    height: 1.7rem;
    margin-right: 3px;
    margin-left: 3px;
  }
  input[type="checkbox"] {
    appearance: none;
    margin-top: 4px;
    width: 1.2rem;
    height: 1.2rem;
    border: 2px solid #577d86;
    border-radius: 50%;
    cursor: pointer;
  }
  input[type="checkbox"]:checked {
    background-color: #577d86;
  }
  select {
    height: 1.7rem;
    border-radius: 3px;
    border: 1px solid #003333;
  }
  span {
    padding-top: 4px;
    flex-basis: auto;
    width: fit-content;
  }
  .checked {
    text-decoration: line-through;
  }
`;

const ButtonContainer = styled.span`
  margin-left: auto;
  display: flex;
  gap: 5px;
  margin-top: -5px;
  button {
    color: white;
    background-color: #9cb4cc;
    border: none;
    border-radius: 3px;
    width: 2.3rem;
    height: 1.7rem;
    :hover {
      transition: 0.3s;
      background-color: #6699cc;
    }
  }
`;

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  onUpdateTodo,
  onDeleteTodo,
  onChecked,
}) => {
  const dispatch = useDispatch();
  const { id, content, isChecked, importance } = todo;
  const [editContent, setEditContent] = useState(content);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImportance, setSelectedImportance] = useState(importance);

  const handleSelect = async (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedImportance(e.target.value);
    try {
      await axios.patch(`http://localhost:3001/todos/${id}`, {
        importance: e.target.value,
      });
      dispatch(selectImportance(id, e.target.value));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodoList = () => {
    onDeleteTodo(id);
  };

  const editTodoList = () => {
    onUpdateTodo(id, editContent);
    setIsEditing(false);
  };

  const checkedClick = () => {
    onChecked(id, isChecked);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditContent(content);
    setIsEditing(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEditContent(e.target.value);

  return (
    <TodoListItemContainer>
      <ImportanceSelect value={selectedImportance} onChange={handleSelect} />
      <label htmlFor={`isChecked${id}`}>
        <input
          id={`isChecked${id}`}
          type="checkbox"
          defaultChecked={isChecked}
          onChange={checkedClick}
        />
      </label>
      {isEditing ? (
        <input type="text" value={editContent} onChange={handleChange} />
      ) : (
        <span className={isChecked ? "checked" : ""}>{editContent}</span>
      )}
      {isEditing ? (
        <ButtonContainer>
          <button onClick={editTodoList}>저장</button>
          <button onClick={handleCancelClick}>취소</button>
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <button onClick={() => setIsEditing(true)}>수정</button>
          <button onClick={deleteTodoList}>삭제</button>
        </ButtonContainer>
      )}
    </TodoListItemContainer>
  );
};
export default TodoListItem;
