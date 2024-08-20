import React from 'react'
function InputBox({
    label,
    amount,
    onSetAmount,
    defaultCurrencyType,
    currencyTypeList=[],
    onCurrencyTypeChange,
}) {

    return (
        <>
            <div className="flex flex-col w-2/4 px-3 py-4 bg-white border border-gray-700 rounded-md">
                <div id='wrapper1' className="flex flex-row justify-between">
                    <label htmlFor="num" className='text-gray-600'>{label}</label>
                    <label htmlFor="currency" className='text-gray-600' >Currency Type</label>
                </div>
                <div id='wrapperInner' className="flex flex-row justify-between mt-3">
                    <input type="number" className="outline-none bg-transparent py-1.5 w-1/2 border border-gray-500 rounded-lg px-3" name="numb" id="num" value={amount} min={0}
                        onChange={(e) => {
                            onSetAmount && onSetAmount(Number(e.target.value))}}
                        
                    />
                    <select name="curr" id="currency" className="outline-none bg-transparent py-1.5 w-1/2 border border-gray-500 rounded-lg px-3" value={defaultCurrencyType} onChange={(prev)=>{
                        onCurrencyTypeChange && onCurrencyTypeChange(prev.target.value)
                    }} >
                        {currencyTypeList.map((currencyType) => (
                            <option key={currencyType} value={currencyType}>{currencyType}</option>
                        ))}
                    </select>
                    
                </div>

            </div>
        </>
    )
}

export default InputBox