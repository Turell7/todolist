import { TODOS_STATUSES } from "./slices/todosSlice/todosConstants"


export const REDUX_LS_KEY = 'REDUX_LS_KEY'

export const initialState = {
    todos: {
        todos: [],
        status: TODOS_STATUSES.IDLE,
        error: null
    },
    counter: 0
}

export const getInitialState = () => {
    const stateLS = localStorage.getItem(REDUX_LS_KEY)

    return stateLS ? JSON.parse(stateLS) : initialState
}