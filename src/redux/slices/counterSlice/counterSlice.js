import { createSlice } from "@reduxjs/toolkit";
import { getInitialState } from "../../initState";


const counterSlice = createSlice({
    name: 'counter',
    initialState: getInitialState().counter,
    reducers: {
        increment(state) {
            return state + 1
        },
        decrement(state) {
            return state - 1
        },
        clearCounter() {
            return 0
        }
    }
})

export const { increment, decrement, clearCounter } = counterSlice.actions

export const counterReducer = counterSlice.reducer