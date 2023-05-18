import { ImportanceSelect } from "./ImportanceSelect";
import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid grey;
  margin-bottom: 10px;
  input {
    border: 1px solid black;
    border-radius: 3px;
    width: 15rem;
    height: 2rem;
    margin-bottom: 20px;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-left: 4px;
  }
  button {
    color: white;
    background-color: #577d86;
    border: none;
    border-radius: 3px;
    width: 2.7rem;
    height: 2rem;
    :hover {
      transition: 0.3s;
      background-color: #003333;
    }
  }
  select {
    height: 2rem;
    border-radius: 3px;
    border: 1px solid #003333;
  }
`;

function Header({ onAddTodo }) {
  const [text, setText] = useState("");
  const [select, setSelect] = useState("중요도 ⭐️");

  const handleChange = (e) => setText(e.target.value);
  const handleSelect = (e) => setSelect(e.target.value);

  const newTodo = () => {
    if (text === "") {
      alert("입력해주세요");
    } else {
      onAddTodo(text, select);
      setText("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      newTodo();
    }
  };

  return (
    <HeaderContainer>
      <ImportanceSelect value={select} onChange={handleSelect} />
      <input
        placeholder={"Todo 내용을 입력하세요"}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        autoFocus={true}
        value={text}
      />
      <button onClick={newTodo}>등록</button>
    </HeaderContainer>
  );
}

export default Header;
