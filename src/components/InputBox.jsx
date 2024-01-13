
import PropTypes from "prop-types";
import { useId } from "react";

export default function InputBox({ label, amount, onAmountChange, currencyOption= [], selectCurrency="usd", onCurrencyChange, amountDisable=false }) {
    let amountId = useId()

    return (


    <div  className="bg-white rounded-lg grid grid-cols-2 text-lg">
        <div>
            <label htmlFor={amountId} className="block m-4 text-gray-500">{label || "From"}</label>
            <input
                id={amountId}
                className="m-4 leading-8 focus:outline-none w-11/12"
                type="text" 
                name="currency Value"
                value={amount}
                disabled={amountDisable}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
/>

        </div>
        <div> 
            <div className="text-right m-4">
                <label className="m-3 text-gray-500">Currency Type</label>
            </div>
            <div className="relative w-1/2 float-right m-4">
                <select value={selectCurrency} onChange={(e) =>onCurrencyChange && onCurrencyChange(e.target.value)} className="block appearance-none w-full bg-slate-100 border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline">

                    {currencyOption.map((option)=>(
                        <option key={option} value={option}> {option}</option>
                        
                        )
                    )}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 7l3-3 3 3m0 6l-3 3-3-3"></path></svg>
                </div>
            </div>

        </div>
    </div>
  );
}

InputBox.propTypes = {
  label: PropTypes.string,
  amount : PropTypes.any,
  selectCurrency: PropTypes.string,
  onCurrencyChange : PropTypes.func,
  onAmountChange: PropTypes.func,
  currencyOption: PropTypes.array,
  amountDisable:PropTypes.bool
};
