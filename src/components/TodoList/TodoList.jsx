import { useSelector } from "react-redux";
import {TodoItem} from "../TodoItem/TodoItem";

export const TodoList = () => {
    console.log('Render todo list')

    const { todos } = useSelector((store) => store)

    if (!todos.length) {
        return <p>Todo list is empty...</p>
    }

    return (
        <ul className="list-group">
            {
                // !todos.length ? <p>Todo list is empty...</p> :
                    todos.map((todo, i) => (
                        <TodoItem key={todo.id} {...todo} inx={i}/>
                    ))
            }
        </ul>
    )
}