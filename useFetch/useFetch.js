import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url)
        const data = await resp.json()

        //console.log(data)
        setState({
            data,
            isLoading: false,
            hasError: null,
        })
    }

    useEffect(() => { //se dispara la primera vez solo
        getFetch()
    }, [url])


    return {
        data: state.data,
        hasError: state.hasError,
        isLoading: state.isLoading,
    };
}
