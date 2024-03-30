import { RootState, AppDispatch } from "./types/types";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./store/todos/TodosSlicer";
import { TTodo } from "./types/types";
import Todo from "./components/todo";
import Counter from './components/counter/counter';
import { useState } from "react";
function App() {
  // const todos = useSelector((state: RootState) => state.todos);
	const dispatch = useDispatch<AppDispatch>()
	const [input, setInput] = useState('');
	/* const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const todo : TTodo = {
      completed : false,
      content : input,
      timeStamp : Date.now()
    }
		dispatch(() => {addTodo(todo)})
		setInput('')
	}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button>add todo</button>
      </form>
      <div>
        {todos.map((todo: TTodo) => (
          <Todo key={todo.timeStamp} todo={todo} />
        ))}
      </div>
    </>
  );
	*/
	return (
		<div>
			<Counter />
		</div>
	)



}

export default App;
