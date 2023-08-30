import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

export const useFetch = (category) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });
    useEffect(() => {
        getGif(category)
            .then(data => {
                setState({
                    loading: false,
                    error: null,
                    data
                });
            });
    }, [category]);

    return state;
}