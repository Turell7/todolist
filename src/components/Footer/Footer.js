import React from "react"
import { useDispatch } from "react-redux"
import { todosClear } from "../../redux/slices/todosSlice/todosSlice"

let Footer = () => {

    const dispatch = useDispatch()

    const clearAllTodosHandler = () => {
        dispatch(todosClear())
    }

console.log('Render Footer')
    return (
        <footer className="d-flex justify-content-center">
            <button onClick={clearAllTodosHandler} type="button" className="btn btn-danger">Clear all</button>
        </footer>
    )
}

Footer = React.memo(Footer)

export {
    Footer
}