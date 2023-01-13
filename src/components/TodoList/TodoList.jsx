import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TODOS_STATUSES } from "../../redux/slices/todosSlice/todosConstants";
import { fetchTodos, getTodosSliceSelecror } from "../../redux/slices/todosSlice/todosSlice";
import {TodoItem} from "../TodoItem/TodoItem";

export const TodoList = () => {
    console.log('Render todo list')
    const dispatch = useDispatch()
    const todosLimit = 3
    
    const { todos, status, error} = useSelector(getTodosSliceSelecror)
    console.log({status, error})

    useEffect(() => {
        dispatch(fetchTodos(todosLimit))
    }, [dispatch])


    if (!todos.length) {
        return <p>Todo list is empty...</p>
    }

    if (status === TODOS_STATUSES.FAILED) {
        return <>
        <p>Error: {error}</p>
        <button onClick={() => dispatch(fetchTodos(todosLimit))}>Refetch</button>
        </>

    }

    if (status === TODOS_STATUSES.LOADING) {
        return <p>Loading...</p>
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