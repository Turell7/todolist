import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer/counterReducer";
import { todosReduser } from "./todosReducer/todosReducer";


export const rootReducer = combineReducers({
    todos: todosReduser,
    counter: counterReducer
})