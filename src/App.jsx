import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Requests from './Requests'
import { useState } from 'react';
import { Graphs } from './Graphs';
function App() {
  const [cpf, setCpf] = useState('11111111111');
  const [opportunities, setOpportunities] = useState();
  const [homeSpinner, setHomeSpinner] = useState(false);
  const [offerSpinner, setOfferSpinner] = useState(false)
  const [viewOpportunities, setViewOpportunities] = useState(false)
  const [viewGraphs, setViewGraphs] = useState(false)
  const [viewHome, setViewHome] = useState(true)
  const [viewOffers, setViewOffers] = useState(false)
  const [offers, setOffers] = useState([]);
  const req = new Requests();

  const analyzeInGraphs = ()=>{
    // setViewHome(!viewHome)
    setViewOffers(false)
    setViewOpportunities(false)
    setHomeSpinner(false)
    setOfferSpinner(false)
    setViewGraphs(!viewGraphs)
  }

  function getOpportunitiesList() {
    setViewOpportunities(false)
    setHomeSpinner(true)
    let opportunitiesList = req.getOpportunities(cpf);
    opportunitiesList.then((data) => {
      setOpportunities(data.instituicoes);
      setTimeout(() => {
        setHomeSpinner(false)
        setViewOpportunities(true)
        setViewOffers(false)
        setOffers([])
      }, 2000);
    })
  }

  const HandleOfferSelected = (md) => {
    setOfferSpinner(true)
    let all = getOffers(opportunities, md.nome)
    setTimeout(() => {
      setViewOpportunities(false)
      setOfferSpinner(false)
      setViewOffers(true)
      setOffers(all)
    }, 5000);


  }

  const filterBestOffer = (filter) => {
    if (filter === "jurosMes") {
      let bestOffer = null;
      for (let i = 0; i < offers.length; i++) {
        if (!bestOffer || offers[i].offer.jurosMes < bestOffer.offer.jurosMes) {
          bestOffer = offers[i];
        }
      }
    }
    // return melhor;
  }

  const getOffers = (instituicoes, creditType) => {
    const modalidades = [];
    for (const instituicao of instituicoes) {
      for (const modalidade of instituicao.modalidades) {
        if (modalidade.nome === creditType) {
          req.getOffers(cpf, instituicao.id, modalidade.cod)
            .then((data) => {
              modalidade.offer = data
              modalidade.instituicao = instituicao.nome
              modalidade.instituicao_id = instituicao.instituicao_id
              modalidades.push(modalidade)
            })
        }
      }
    }
    return modalidades;
  }

  const handleChangeCpf = (e) => {
    setCpf(e.target.value)
  }

  const returnToHome = ()=>{
    window.location.reload()
  }

  const graphsOptions = {
    analyzeInGraphs,
  }
  const homeOptions = {
    cpf,
    handleChangeCpf,
    getOpportunitiesList,
    opportunities,
    homeSpinner,
    viewOpportunities,
    HandleOfferSelected,
    offers,
    analyzeInGraphs,
    viewOffers,
    returnToHome,
    offerSpinner,
    viewGraphs,
    graphsOptions
  }


  return (
    <div className="App">
      {viewHome &&  <Home options={homeOptions} />}

    </div>
  );
}

export default App;
