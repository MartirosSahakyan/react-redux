import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/action";

export default function TodoList() {
  const { todos } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const handleDeleteBtn = (id) => () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          <p key={todo.id}>
            {todo.title}{" "}
            <button onClick={handleDeleteBtn(todo.id)}>Delete todo</button>
          </p>
        );
      })}
    </div>
  );
}
