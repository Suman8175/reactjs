import { useEffect,useState } from "react";

function useCurrency(currency){
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    console.log("Fetching URL:", url);
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(val => {
            setData(val[currency])  
        })
        .catch(err => {
            console.log(err);
        })
    },[currency])
    return data
}

export default useCurrency;