export const ADDTODO = "todos/ADD";
export const EDITTODO = "todos/EDIT";
export const TODOCHECKED = "todos/CHECKED";
export const DELETETODO = "todos/DELETE";
export const FETCH_TODOS_SUCCESS = "todos/FETCH_SUCCESS";
export const FETCH_TODOS_FAILURE = "todos/FETCH_FAILURE";
export const SELECT_IMPORTANCE = "todos/IMPORTANCE";

export const addTodo = (todo) => {
  return {
    type: ADDTODO,
    payload: {
      id: todo.id,
      content: todo.content,
      isChecked: false,
      importance: todo.importance,
    },
  };
};

export const editTodo = (id, content) => {
  return {
    type: EDITTODO,
    payload: {
      id,
      content: content,
    },
  };
};

export const todoChecked = (id, isChecked) => {
  return {
    type: TODOCHECKED,
    payload: { id, isChecked: !isChecked },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETETODO,
    payload: { id },
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

export const selectImportance = (id, importance) => {
  return {
    type: SELECT_IMPORTANCE,
    payload: {
      id: id,
      importance: importance,
    },
  };
};
