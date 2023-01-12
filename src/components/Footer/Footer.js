import React from "react"

let Footer = ({clearAllTodos}) => {
console.log('Render Footer')
    return (
        <footer className="d-flex justify-content-center">
            <button onClick={clearAllTodos} type="button" className="btn btn-danger">Clear all</button>
        </footer>
    )
}

Footer = React.memo(Footer)

export {
    Footer
}