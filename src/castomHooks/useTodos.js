import {useCallback, useEffect, useState} from "react";
import {TODOS_KEYS_IN_LS} from "../utils/constants";


export const useTodos = () => {
    const [todos, setTodos] = useState([])
    // console.log({todos})
    useEffect(() => {
        const todosFromLS = localStorage.getItem(TODOS_KEYS_IN_LS)
        const prepareTodos = todosFromLS ? JSON.parse(todosFromLS) : []

        if (prepareTodos.length) {
            setTodos(prepareTodos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(TODOS_KEYS_IN_LS, JSON.stringify(todos))
    }, [todos])

    const addNewTodo = useCallback((title) => {
        const newTodo = {
            title,
            id: Date.now(),
            status: false
        }

        setTodos(prev => [newTodo, ...prev])
    }, [])
    console.log(todos)

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter((todo) => todo.id !== id))
    }

    const changeTodoStatus = (id) => {
        setTodos(prev => prev.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    status: !todo.status
                }
            }
            return todo
        }))
    }

    const clearAllTodos = useCallback(() => {
        setTodos([])
    }, [])

    return {
        todos,
        addNewTodo,
        deleteTodo,
        changeTodoStatus,
        clearAllTodos
    }
}