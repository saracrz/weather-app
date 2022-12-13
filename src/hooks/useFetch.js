import { useState } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    const getData = () => {
        fetch(url)
        .then((response) => {
            const res = response.json()
            return res;
        })
        .then((res) => setData(res))     
    }

    return {data, getData};
}

