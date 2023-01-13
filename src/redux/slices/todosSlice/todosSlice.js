import { createSlice} from "@reduxjs/toolkit";
import { getInitialState } from "../../initState";


const todosSlice = createSlice({
    name: 'todos',
    initialState: getInitialState().todos,
    reducers: {
        todoCreate: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title) {
                return {
                    payload: {
                        id: crypto.randomUUID(),
                        title,
                        status: false
                    }

                }
            }
        },
        todoChangeStatus(state, action) {
            const currentTodo = state.find(todo => todo.id === action.payload)

            if (currentTodo) {
                currentTodo.status = !currentTodo.status
            }
        },
        todoDelete(state, action) {
            return state.filter((todo) => todo.id !== action.payload)
        },
        todosClear() {
            return []
        }
    }
})

export const { todoCreate, todoChangeStatus, todoDelete, todosClear } = todosSlice.actions

export const todosReducer = todosSlice.reducer