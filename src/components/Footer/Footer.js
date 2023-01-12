import React from "react"
import { useDispatch } from "react-redux"
import { clearTodosAC } from "../../redux/actionsCreators/todosAC"

let Footer = () => {

    const dispatch = useDispatch()

    const clearAllTodosHandler = () => {
        dispatch(clearTodosAC())
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