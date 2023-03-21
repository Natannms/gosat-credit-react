import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Requests from './Requests'
import { useState } from 'react';
function App() {
  const [cpf, setCpf] = useState('');
  const [opportunities, setOpportunities] = useState();

  const req = new Requests();
  function getOpportunitiesList(){
    let opportunitiesList = req.getOpportunities(cpf);
    opportunitiesList.then((data) => {
       setOpportunities(data.instituicoes);
       console.log(opportunities);
    })
  }
  const handleChangeCpf = (e)=>{
    setCpf(e.target.value)
  }
  const homeOptions = {
    cpf,
    handleChangeCpf,
    getOpportunitiesList,
    opportunities
  }

  return (
    <div className="App">
       <Home options={homeOptions}/>
    </div>
  );
}

export default App;
