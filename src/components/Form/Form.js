import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { todoCreate } from "../../redux/slices/todosSlice/todosSlice";


let Form = () => {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    console.log('Render Form')

    const submitHandler = (e) => {
        e.preventDefault()
        
        if (input) {
            dispatch(todoCreate(input))
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