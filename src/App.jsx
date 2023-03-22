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
  const [viewOpportunities, setViewOpportunities] = useState(false)
  const [viewGraphs, setViewGraphs] = useState(false)
  const [viewHome, setViewHome] = useState(true)
  const [viewOffers, setViewOffers] = useState(false)
  const [offers, setOffers] = useState([]);
  const req = new Requests();

  const analyzeInGraphs = ()=>{
    setViewHome(!viewHome)
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
      }, 2000);
    })
  }

  const HandleOfferSelected = (md) => {
    let all = getOffers(opportunities, md.nome)
    setTimeout(() => {
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
      console.log(offers);
      console.log("MELHOR OFERTA:", bestOffer);
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

  }

  const graphsOptions = {
    analyzeInGraphs,
  }
  return (
    <div className="App">
      {viewHome &&  <Home options={homeOptions} />}
      {viewGraphs && <Graphs graphsOptions={graphsOptions} offers={offers} />}
    </div>
  );
}

export default App;
