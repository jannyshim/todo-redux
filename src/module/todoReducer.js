import {
  ADDTODO,
  EDITTODO,
  TODOCHECKED,
  DELETETODO,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_SUCCESS,
  SELECT_IMPORTANCE,
} from "./todoAction";
const initialState = { todos: [] };

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            content: action.content,
            isChecked: false,
            importance: action.importance,
          },
        ],
      };
    case EDITTODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, content: action.payload } : todo
        ),
      };
    case DELETETODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case TODOCHECKED:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, isChecked: !todo.isChecked } : todo
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
          todo.id === action.id ? { ...todo, importance: action.payload } : todo
        ),
      };
    default:
      return state;
  }
};
