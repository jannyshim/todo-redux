import {
  ADDTODO,
  EDITTODO,
  TODOCHECKED,
  DELETETODO,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_SUCCESS,
  SELECT_IMPORTANCE,
  TodoAction,
} from "./todoAction";

interface Todo {
  id: number;
  content: string;
  isChecked: boolean;
  importance: string;
}

interface State {
  todos: Todo[];
  error?: Error;
}
const initialState: State = { todos: [] };

export const todoReducer = (
  state: State = initialState,
  action: TodoAction
): State => {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            content: action.payload.content,
            isChecked: false,
            importance: action.payload.importance,
          },
        ],
      };
    case EDITTODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, content: action.payload.content }
            : todo
        ),
      };
    case DELETETODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case TODOCHECKED:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isChecked: !todo.isChecked }
            : todo
        ),
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case SELECT_IMPORTANCE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, importance: action.payload.importance }
            : todo
        ),
      };
    default:
      return state;
  }
};
