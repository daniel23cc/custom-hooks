import { useState } from "react"


export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onResetForm=()=>{
        setFormState(initialForm)
    }

    //const { username, email, password } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target

        setFormState({
            ...formState,
            [name]: value
        })
        //console.log({name, value})
    }

    return {
        ...formState, //operador spread para devolverlo por copia y no por referencia
        formState,
        onInputChange,
        onResetForm,
    }
}
