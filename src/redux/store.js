import { createStore } from "redux"
import { initialState } from "./initState"
import { rootReducer } from "./reducers/rootReducer"



export const store = createStore(rootReducer, initialState)
