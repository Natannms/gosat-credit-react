import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Requests from './Requests'
import { useState } from 'react';
function App() {
  const [cpf, setCpf] = useState('');
  const [opportunities, setOpportunities] = useState();
  const [homeSpinner, setHomeSpinner] = useState(false);
  const [viewOpportunities, setViewOpportunities] = useState(false)
  const [OfferSelected, setOfferSelected] = useState('');

  const req = new Requests();

  function getOpportunitiesList(){
    setViewOpportunities(false)
    setHomeSpinner(true)
    let opportunitiesList = req.getOpportunities(cpf);
    opportunitiesList.then((data) => {
      setOpportunities(data.instituicoes);
      setTimeout(() => {
        setHomeSpinner(false)
        setViewOpportunities(true)
       }, 2000);
    })
  }

  const HandleOfferSelected = (md)=>{
    console.log("FILTRANDO MODALIDADES")
    console.log(getOffer(opportunities));
  }

  const  getOffer = (instituicoes) =>{
    const modalidades = [];
    for (const instituicao of instituicoes) {
      for (const modalidade of instituicao.modalidades) {
        // if (modalidade.nome === 'crédito pessoal') {
        //   modalidades.push(modalidade);
        // }
        req.getOffers(cpf, instituicao.id, modalidade.cod)
        .then((data)=>{
          console.log(data);
        });
      }
    }
    return modalidades;
  }

  const handleChangeCpf = (e)=>{
    setCpf(e.target.value)
  }
  const homeOptions = {
    cpf,
    handleChangeCpf,
    getOpportunitiesList,
    opportunities,
    homeSpinner,
    viewOpportunities,
    HandleOfferSelected
  }

  return (
    <div className="App">
       <Home options={homeOptions}/>
    </div>
  );
}

export default App;
