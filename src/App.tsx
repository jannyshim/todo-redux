import React from "react";
import TodoList from "./components/TodoList";
import GlobalStyle from "./global-styles";

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <main>
        <TodoList />
      </main>
    </div>
  );
};

export default App;
