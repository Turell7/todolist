import { Counter } from "../Counter/Counter";
import {TodoList} from "../TodoList/TodoList";

const Main = () => {
    
    return (
        <main>
            <TodoList />
            <hr/>
            <Counter />
        </main>
    )
}

export {
    Main
}