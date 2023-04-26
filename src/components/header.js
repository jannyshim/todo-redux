import React, { useState } from "react";

function Header({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const newTodo = () => {
    if (text === "") {
      alert("입력해주세요");
    } else {
      onAddTodo(text);
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
    <div>
      <input
        placeholder={"Todo 내용을 입력하세요"}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        autoFocus={true}
        value={text}
      />
      <button onClick={newTodo}>등록</button>
    </div>
  );
}

export default Header;
