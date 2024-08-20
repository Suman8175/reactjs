import './index.css'
import { useEffect, useState ,useRef, useCallback} from 'react'

function App() {

  const [length, setLength] = useState(6);
  const [password, setPassword] = useState('');
  const [numberInclude, setNumberInclude] = useState(false);
  const [symbolInclude, setSymbolInclude] = useState(false);
  const [copy, setCopy] = useState(false);

  const generatePassword = useEffect(() => {
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';
    if(numberInclude){
      letters += numbers
    }
    if(symbolInclude){      
      letters += symbols
    }
    let passwordText = '';
    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * letters.length);
      passwordText += letters[random];
    }
    if (numberInclude){
      const randomIndex = Math.floor(Math.random() * passwordText.length);
      const randomNumber = Math.floor(Math.random() * numbers.length);
      passwordText = passwordText.substring(0, randomIndex) + numbers[randomNumber] + passwordText.substring(randomIndex+1);
    }
    if (symbolInclude){
      const randomIndex = Math.floor(Math.random() * passwordText.length);
      const randomSymbol = Math.floor(Math.random() * symbols.length);
      passwordText = passwordText.substring(0, randomIndex) + symbols[randomSymbol] + passwordText.substring(randomIndex+1);
    }

    setPassword(passwordText);
    
  }, [length, numberInclude, symbolInclude]);

  const copyPassword= useRef();

  const copyToClipBoard = useCallback(() => {
      window.navigator.clipboard.writeText(password)
      setCopy(true); 
      setTimeout(() => setCopy(false), 2000);
  }, [password]);


  return (
    <>
      <div className='flex justify-center w-full h-screen bg-gray-600  bg-[url("https://images.pexels.com/photos/27593122/pexels-photo-27593122/free-photo-of-ocean-wave.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")]  bg-cover'>
        <div id="wrapper" className="flex flex-col items-center w-1/2 mt-16 border border-gray-100 rounded-md py-7 bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 h-max">
          <h2 className="text-2xl text-white">Random Password Generator</h2>
          <div className="flex flex-row justify-center w-full my-4">
            <input type="text" id="password" className='w-2/4 pl-2 rounded-md' value={password} readOnly ref={copyPassword} />
            <button id="generate" className="px-3 py-1 text-white bg-blue-500 border rounded-md border-blue-950 hover:opacity-70"onClick={copyToClipBoard} >{copy ? 'Copied!' : 'Copy'}</button>
          </div>
          <div className="flex flex-row items-center gap-1">
            {/* Range */}
            <input type="range" name="lengthOfPassword" id="lengthOfPassword" className='cursor-pointer' min={6} max={20} defaultValue={6} onChange={(e) => setLength(e.target.value)} />
            <label htmlFor="lengthOfPassword" className="mr-3 text-white">Length {length}</label>
            {/* Number Include CheckBox */}
            <input type="checkbox" name="numberInclude" id="numberInclude " onChange={()=>setNumberInclude((pervious)=>!pervious)} />
            <label htmlFor="numberInclude" className="mr-3 text-white">Include Number</label>
            {/* Symbol Include Checkbox */}
            <input type="checkbox" name="symbolInclude" id="symbolInclude" onClick={()=>setSymbolInclude((p)=>!p) } />
            <label htmlFor="symbolInclude" className="text-white ">Include Symbol</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
