export const ADDTODO = "ADDTODO";
export const DELETETODO = "DELETETODO";
export const INPUTVALUE = "INPUTVALUE";
export const GETTODOS = "GETTODOS";

export const addTodo = (payload) => ({
  type: ADDTODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETETODO,
  payload,
});

export const handleInputValue = (payload) => ({
  type: INPUTVALUE,
  payload,
});

export const getTodos = () => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: "GET_TODOS",
          payload: res,
        })
      );
  };
};
