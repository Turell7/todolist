import { ADD_TODO, CHANGE_STATUS_TODO, CLEAR_TODOS, DELETE_TODO } from "../types/todosTypes";


export const addNewTodoAC = (title) => ({
type: ADD_TODO,
payload: {
    id: Date.now(),
    staus: false,
    title
}
})

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