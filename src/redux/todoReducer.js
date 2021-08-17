import { ADDTODO, DELETETODO, INPUTVALUE } from "./action";

const initialState = {
  todos: [
    // {
    //     "id": 1,
    //     "title": "delectus aut autem",
    //     "completed": false
    //   },
  ],
  inputValue: ''
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        todos: [...state.todos, {
            id: Date.now(),
            title: state.inputValue,
            completed: false
        }],
        inputValue: ''
      };
    case DELETETODO:
      return {
        ...state,
        todos: state.todos.filter(todo=>todo.id !== action.payload) ,
      };
    case INPUTVALUE:
      return {
        ...state,
        inputValue: action.payload
      };
    case 'GET_TODOS':
      return {
        ...state,
        todos: [...state.todos, action.payload ]
      };

    default:
        return state
  }
}

