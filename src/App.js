import TodoList from "./components/TodoList";
import GlobalStyle from "./global-styles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
