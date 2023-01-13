import { useDispatch, useSelector } from "react-redux"
import { clearCounterAC, decrementCounterAC, incrementCounterAC } from "../../redux/actionsCreators/counterAC"

export const Counter = () => {

    console.log('Counter Render')

    const dispatch = useDispatch()
    const counter = useSelector((store) => store.counter)

    const decrementHandler = () => {
        dispatch(decrementCounterAC())
    }
    const incrementHandler = () => {
        dispatch(incrementCounterAC())
    }
    const clearCounterHandler = () => {
        dispatch(clearCounterAC())
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