import bgImage from "./assets/bg.jpg";
import InputBox from "./components/InputBox";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";


function App() {
  const [from , setFrom] = useState("usd");
  const [to , setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, SetConvertedAmount] =useState(0);
  
  const data = useCurrencyInfo(from);
  const CurrencyOptions = Object.keys(data);

  function swap() {
    let tempCurrency = from;
    setFrom(to);
    setTo(tempCurrency);
    
    // Reset both amount and convertedAmount to 0
    setAmount(convertedAmount);
    SetConvertedAmount("0");
  }

  function convert(){
    SetConvertedAmount(amount * data[to])
  }
  
  return (
    <div className="relative h-screen">
      <img src={bgImage} alt="background" className="w-screen h-screen absolute z-0" />
     

      <div className="flex items-center justify-center h-full relative z-10 ">
        <div className="bg-white bg-opacity-25 px-8 py-8 w-5/12 rounded-lg border border-white">
        <form onSubmit={(e)=>{
          e.preventDefault()
          convert()
          }}>
          <div className="m-3">
            <InputBox amount={amount} onCurrencyChange={(newCurrency)=>{
              setFrom(newCurrency)
            }} onAmountChange={(newamount)=>{
              setAmount(newamount);
            }} currencyOption={ CurrencyOptions}  selectCurrency={from} label="From"/>
          </div>
          <button onClick={swap} className="block mx-auto bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Swap</button>
          <div className="m-3">
            <InputBox currencyOption={CurrencyOptions} amountDisable onCurrencyChange={(newCurrency)=>{
              setTo(newCurrency)
            }} amount={convertedAmount} selectCurrency={to} label="To"  onAmountChange={(newamount)=>{
              SetConvertedAmount(newamount);
            }}/>
          </div>
          <button type="submit" className="block w-11/12 mx-auto text-xl bg-blue-500 hover:bg-blue-700 text-white  py-2 rounded-lg">Convert {from} to {to} </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
