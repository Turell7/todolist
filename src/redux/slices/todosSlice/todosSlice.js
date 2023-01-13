import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { getInitialState } from "../../initState";
import { TODOS_STATUSES } from "./todosConstants";

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async (limit = 5) => {
        const response = await fetch (`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)

        return response.json()
    }
)

const todosSlice = createSlice({
    name: 'todos',
    initialState: getInitialState().todos,
    reducers: {
        todoCreate: {
            reducer(state, action) {
                state.todos.push(action.payload)
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
            const currentTodo = state.todos.find(todo => todo.id === action.payload)

            if (currentTodo) {
                currentTodo.status = !currentTodo.status
            }
        },
        todoDelete(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        todosClear(state) {
            state.todos = []
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.status = TODOS_STATUSES.LOADING
            state.error = null
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.status = TODOS_STATUSES.SUCCEEDED
            if(!state.todos.length) state.todos.push(...action.payload)
        })
        .addCase(fetchTodos.rejected, (state, action) => {
            state.status = TODOS_STATUSES.FAILED
            console.log(action)
            state.error = action.error.message
        })
    }
})

export const getAllTodosSelector = (store) => store.todos.todos

export const getTodosSliceSelecror = (store) => store.todos

export const { todoCreate, todoChangeStatus, todoDelete, todosClear } = todosSlice.actions

export const todosReducer = todosSlice.reducer