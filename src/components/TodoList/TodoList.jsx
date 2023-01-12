import {TodoItem} from "../TodoItem/TodoItem";

export const TodoList = ({todos, changeTodoStatus, deleteTodo}) => {
    return (
        <ul className="list-group">
            {
                // !todos.length ? <p>Todo list is empty...</p> :
                    todos.map((todo, i) => (
                        <TodoItem key={todo.id} {...todo} inx={i} changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo}/>
                    ))
            }
        </ul>
    )
}