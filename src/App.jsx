import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Requests from './Requests'
import { useState } from 'react';
function App() {
  const [cpf, setCpf] = useState('2');

  const req = new Requests();
  function setOportunities(){
    let opportunities = req.getOpportunities(cpf);
     opportunities.then((data) => {
      console.log(data);
    })
  }
  const handleChangeCpf = (e)=>{
    setCpf(e.target.value)
  }
  const homeOptions = {
    cpf,
    handleChangeCpf,
    setOportunities
  }

  return (
    <div className="App">
       <Home options={homeOptions}/>
    </div>
  );
}

export default App;
