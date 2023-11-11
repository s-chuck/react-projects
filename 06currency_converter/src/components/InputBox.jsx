import React from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                {/* in the input tag we have defined many attributes one is className for tailwind styling another one is type which is number self explainatory , placeholder is what is written in the input box next one is disabled which is equal to amountDisable which tells if the input field should be disabled or enabled next is amount what should the user see in that it should be the amount , last one is onChange it is a attribute which tells what happens when user changes the value in the input field there we have a e as parameter which picks the value which user have inserted in the input field by using Number(e.target.value) and number converts it into integer */}
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value = {amount}
                    onChange = {(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                {/* In the select tag we have nested the option tag which is used to give options to the user that which currency is to be selected in select tag we have className for styling and value */}
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >
                    {/* Here we have traversed an array named currencyOptions which contain all the currency name like usd,inr etc. and here we have used 2*() bracket because outer one is for the map and the inner one is for wrapping the jsx elements inside js. we can also write 
                    {return(...)} but this one is shorthand for that */}
                    {/* Now the question is why have we used key in it? The answer for this is In the context of a loop like map, you should assign a unique key to each element to ensure React can efficiently update the UI. React uses keys to determine whether an element is a new one, needs to be updated, or removed. Without keys, React might have to re-render the entire list, which can be less efficient.*/}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}


                </select>
            </div>
        </div>
    );
}

export default InputBox;


