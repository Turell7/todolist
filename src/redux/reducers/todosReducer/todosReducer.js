
import { initialState } from "../../initState";
import { ADD_TODO, ADD_TODOS, CHANGE_STATUS_TODO, CLEAR_TODOS, DELETE_TODO } from "../../types/todosTypes";


export const todosReduser = (state = initialState.todos, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [action.payload, ...state]
            
        case ADD_TODOS:
            return action.payload

        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload)

        case CHANGE_STATUS_TODO:
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        status: !todo.status
                    }
                }
                return todo
            })

        case CLEAR_TODOS:
            return []

        default:
            return state
    }
}