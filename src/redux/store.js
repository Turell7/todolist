import { createStore, applyMiddleware } from "redux"
import { getInitialState, REDUX_LS_KEY } from "./initState"
import { rootReducer } from "./reducers/rootReducer"
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";



export const store = createStore(rootReducer, getInitialState(), composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  ))

store.subscribe(() => {
    localStorage.setItem(REDUX_LS_KEY, JSON.stringify(store.getState()))
})

