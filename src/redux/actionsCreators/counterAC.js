import { CLEAR_COUNTER, DECREMENT, INCREMENT } from "../types/counterTypes";


export const incrementCounterAC = () => ({
    type: INCREMENT
})

export const decrementCounterAC = () => ({
    type: DECREMENT
})

export const clearCounterAC = () => ({
    type: CLEAR_COUNTER
})