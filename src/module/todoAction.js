export const ADDTODO = "todos/ADD";
export const TODOCHECKED = "todos/CHECKED";
export const DELETETODO = "todos/DELETE";
export const FETCH_TODOS_SUCCESS = "todos/FETCH_SUCCESS";
export const FETCH_TODOS_FAILURE = "todos/FETCH_FAILURE";

export const addTodo = (todo) => {
  return {
    type: ADDTODO,
    payload: {
      content: todo.content,
      isChecked: false,
    },
  };
};

export const todoChecked = (id) => {
  return {
    type: TODOCHECKED,
    id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETETODO,
    id,
  };
};

export const fetchTodosSuccess = (todos) => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos,
  };
};

export const fetchTodosFailure = (error) => {
  return {
    type: FETCH_TODOS_FAILURE,
    payload: error,
  };
};
