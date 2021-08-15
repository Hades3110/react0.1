import './App.css';
import EnterText from './EnterText';
import { useState } from 'react';
import Divs from './Divs'

function App() {
  
  const [inpValue , setInpValue] = useState("")
  return (
    <div className="App">
      <EnterText onAdd={(text) => {
        setInpValue(text)
      }}/>
      <Divs text={inpValue}/>
    </div>
  );
}

export default App;
