export const ADDTODO = "todos/ADD";
export const EDITTODO = "todos/EDIT";
export const TODOCHECKED = "todos/CHECKED";
export const DELETETODO = "todos/DELETE";
export const FETCH_TODOS_SUCCESS = "todos/FETCH_SUCCESS";
export const FETCH_TODOS_FAILURE = "todos/FETCH_FAILURE";
export const SELECT_IMPORTANCE = "todos/IMPORTANCE";

interface Todo {
  id: number;
  content: string;
  isChecked: boolean;
  importance: string;
}

interface AddTodoAction {
  type: typeof ADDTODO;
  payload: Todo;
}

interface EditTodoAction {
  type: typeof EDITTODO;
  payload: {
    id: number;
    content: string;
  };
}

interface TodoCheckedAction {
  type: typeof TODOCHECKED;
  payload: {
    id: number;
    isChecked: boolean;
  };
}

interface DeleteTodoAction {
  type: typeof DELETETODO;
  payload: {
    id: number;
  };
}

interface FetchTodosSuccessAction {
  type: typeof FETCH_TODOS_SUCCESS;
  payload: Todo[];
}

interface FetchTodosFailureAction {
  type: typeof FETCH_TODOS_FAILURE;
  payload: Error;
}

interface SelectImportanceAction {
  type: typeof SELECT_IMPORTANCE;
  payload: {
    id: number;
    importance: string;
  };
}

export type TodoAction =
  | AddTodoAction
  | EditTodoAction
  | TodoCheckedAction
  | DeleteTodoAction
  | FetchTodosSuccessAction
  | FetchTodosFailureAction
  | SelectImportanceAction;

export const addTodo = (todo: Todo) => {
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

export const editTodo = (id: number, content: string) => {
  return {
    type: EDITTODO,
    payload: {
      id,
      content: content,
    },
  };
};

export const todoChecked = (id: number, isChecked: boolean) => {
  return {
    type: TODOCHECKED,
    payload: { id, isChecked: !isChecked },
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: DELETETODO,
    payload: { id },
  };
};

export const fetchTodosSuccess = (todos: Todo[]) => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos,
  };
};

export const fetchTodosFailure = (error: Error) => {
  return {
    type: FETCH_TODOS_FAILURE,
    payload: error,
  };
};

export const selectImportance = (id: number, importance: string) => {
  return {
    type: SELECT_IMPORTANCE,
    payload: {
      id: id,
      importance: importance,
    },
  };
};
