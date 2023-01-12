import './App.css';
import {Header} from './components/Header/Header';
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {useTodos} from "./castomHooks/useTodos";

function App() {
    const {todos, addNewTodo, deleteTodo, changeTodoStatus, clearAllTodos} = useTodos()

  return (
    <div className='container py-5'>
        <Header addNewTodo={addNewTodo}/>
        <hr/>
        <Main changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo} todos={todos}/>
        <hr/>
        <Footer clearAllTodos={clearAllTodos}/>
    </div>
  );
}

export default App;
