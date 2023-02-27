import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"


const initialState = [
    /*  {
         id: new Date().getTime(),
         description: 'Recolectar la piedra del alma',
         done: false,
     },
     {
         id: new Date().getTime() * 3,
         description: 'Recolectar la piedra del tiempo',
         done: false,
     }, */
]


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        })
        //console.log({ id })
    }

    const handleToggleTodo = (id) => {
        //console.log({id})
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        })
    }


    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
    }
}
