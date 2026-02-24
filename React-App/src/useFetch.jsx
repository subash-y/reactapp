import { useEffect, useState } from 'react';

const useFetch = (url) => {
    //useSet hook
    const [data, setData] = useState(null);//coursedata
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {

            fetch(url)
                .then(response => {
                    console.log(response)
                    if (!response.ok) {
                        throw Error("Couldn't retrieve data.");
                    }
                    return response.json();
                }).then(data => setData(data))
                .catch((error) => {
                    console.log(error.message);
                    setError(error.message);
                })

        }, 1000)

    }, []); //We usually don't update state in useEffect because it run infinte,but here we did because it run only one time we have empty dependency array[] here. 

    return [data,error];
}

export default useFetch