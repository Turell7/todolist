import { useDispatch, useSelector } from "react-redux"
import { clearCounter, decrement, increment } from "../../redux/slices/counterSlice/counterSlice"

export const Counter = () => {

    console.log('Counter Render')

    const dispatch = useDispatch()
    const counter = useSelector((store) => store.counter)

    const decrementHandler = () => {
        dispatch(decrement())
    }
    const incrementHandler = () => {
        dispatch(increment())
    }
    const clearCounterHandler = () => {
        dispatch(clearCounter())
    }

    return <div>
        <h2>Counter: {counter} </h2>
        <div className="d-flex justify-content-center">
                <button
                onClick={decrementHandler}
                type="button"
                className="btn mx-2 btn-danger"
                >
                    -
                </button>
                <button
                onClick={incrementHandler}
                type="button"
                className="btn mx-2 btn-success"
                >
                    +
                </button>
                <button
                onClick={clearCounterHandler}
                type="button"
                className="btn mx-2 btn-dark"
                >
                    Make 0
                </button>
            </div>
    </div>
}