import React, {useState} from "react";


let Form = ({addNewTodo}) => {

    const [input, setInput] = useState('')

    console.log('Render Form')

    const submitHandler = (e) => {
        e.preventDefault()

        console.log({input})

        if (input) {
            addNewTodo(input)
            setInput('')
        }
    }

    return (
        <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
            <div className="mb-3">
                <input type="text" value={input} className="form-control" placeholder="Title" onChange={(e) => setInput(e.target.value)}/>
            </div>

            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    )
}

Form = React.memo(Form)

export {
    Form
}