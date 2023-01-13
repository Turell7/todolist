import { createStore, applyMiddleware } from "redux"
import { getInitialState, REDUX_LS_KEY } from "./initState"
import { rootReducer } from "./reducers/rootReducer"
import { composeWithDevTools } from '@redux-devtools/extension';



export const store = createStore(rootReducer, getInitialState(), composeWithDevTools(
    applyMiddleware()
    // other store enhancers if any
  ))

store.subscribe(() => {
    localStorage.setItem(REDUX_LS_KEY, JSON.stringify(store.getState()))
})

