import { ADD_TODO, ADD_TODOS, CHANGE_STATUS_TODO, CLEAR_TODOS, DELETE_TODO } from "../types/todosTypes";


export const addNewTodoAC = (title) => ({
type: ADD_TODO,
payload: {
    id: Date.now(),
    staus: false,
    title
}
})

export const addNewTodosAC = (newTodos) => ({
    type: ADD_TODOS,
    payload: newTodos
})

export const getTodosAC = () => async (dispatch) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    
    const todos = await res.json()

    const preparedTodos = todos.map(todo => {
        const {userId,  completed, ...restTodo} = todo

        return {
            ...restTodo,
            status: completed
        }
    })

    dispatch(addNewTodoAC(preparedTodos))
}

export const deleteTodoAC  = (id) => ({
    type: DELETE_TODO,
    payload: id
})

export const changeStatusTodoAC = (id) => ({
    type: CHANGE_STATUS_TODO,
    payload: id
})

export const clearTodosAC = () => ({
    type: CLEAR_TODOS,
})