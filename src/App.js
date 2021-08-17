import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css"
import TodoList from "./components/TodoList";
import { addTodo, getTodos, handleInputValue } from "./redux/action";



export function App() { 
const dispatch = useDispatch()
const {inputValue} = useSelector(state=>state.todoReducer)

 const handleInputChange = ({target: {value}}) => {
  dispatch(handleInputValue(value))
 }
 const handleAddBtn = () => {
   dispatch(addTodo())
 }
 const handleAsyncBtn = () => {
   dispatch(getTodos())
 }
    return (
      <>
        <h1>Todo Redux App</h1>
        <button onClick={handleAsyncBtn} > show existing todo </button>
        <br></br>
        <input value={inputValue} onChange={handleInputChange} type='text'/>
        <button onClick={handleAddBtn}>add todo</button>
          <TodoList/>
      </>
  )
   
}

export default App;
