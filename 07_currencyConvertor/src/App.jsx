import './index.css'
import { useState } from 'react'
import {InputBox}from './component/index'
import useCurrency from './hooks/useCurrency'
function App() {
  const [amount, setAmount] = useState(0)
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('npr')
  const [convertedAmount,setConvertedAmount] = useState(0)


  //useCurrencyHook
  const currencyData= useCurrency(from);
  const val=Object.keys(currencyData);
  


  //***** */
  let convertCurrency=(amount)=>{
    setAmount(amount)
    setConvertedAmount(amount*currencyData[to])
    console.log('Amount:',amount);
  }


  let changeIt=(input)=>{
    setFrom(input)
    convertCurrency(amount)
  }

  return (
    <>
    <div className="flex flex-col items-center w-full h-screen bg-red-400 pt-28">
    <h1>Currency Convertor</h1>
    <InputBox label="From"  amount={amount} onSetAmount={convertCurrency} defaultCurrencyType={from} currencyTypeList= {val} onCurrencyTypeChange={(curr)=>{
     changeInput(curr)
    }}/>
    <InputBox label="To"  amount={convertedAmount}  defaultCurrencyType={to} currencyTypeList= {val} onCurrencyTypeChange={(value)=>{console.log('Hi');
    }}/>
    </div>
    </>
  )
}

export default App
