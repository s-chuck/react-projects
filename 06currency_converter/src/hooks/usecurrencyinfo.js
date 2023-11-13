import { useEffect, useState } from "react";

//creating a custom hook
//Now if somebody wants to understand what we have done in this so we have to start from the first 
//1.At first in this link that is specified in the fetch we have a vast amount of data each of this data consist of the current currency exchange rate for every other currency.
//for example: usd {inr:83.22,tal:382.38......} usd is an object which consist of key value pair of all the other currency names and their exchange rate.
//2.this hook is called whenever user selects some currency name in the select bar and then this hook will send all the data of this particular currency to the main App.jsx
//3.The response we will be getting from the fetch we will use (.then(res) => res.json())to convert this into json format and through (.then(res) => setData(res[currency])) it means make data = currency(usd) {..........}.

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json()) 
        .then((res) => setData(res[currency]))
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;