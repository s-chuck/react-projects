import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/usecurrencyinfo'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  //When we have to swap the above and below options just call the swap method and the rest would be taken care of the setFrom(to) sets the value of (from -> to) and the setTo(from) sets the value (to -> from). 
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  //The convert function is called because the amount lets say given by the user is 50usd and we have to convert it into inr then we have to multiply the amount * currencyInfo[to] which is equal to our customhook useCurrencyInfo(from) so from this hook we get all the currency exchange rate and then using the variable we can access the individual values of the currency we want the conversion rate for.
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()   
                    }}
                >   
                {/* In the next div what we have done is we have called the InputBox component which is present in InputBox.jsx in components folder and passing all of these variables and methods which is gonna be processed later at that file. */}
                {/* in the below InputBox compenent we have use onAmountChange() method because we would be able to change the value of the amount we want to convert to other currencies */}
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        {/* in this InputBox we haven't passed the onAmountChange() method because we don't need to manually put the value in it as it should be processed according to the amount inserted by the user who want to convert one currency to other. */}
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App