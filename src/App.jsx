import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Requests from './Requests'
import { useState } from 'react';
import { Graphs } from './Graphs';
import Contract from './Contract/Index';
import Dashboard from './Dashboard/Dashboard';


function App() {
  const [cpf, setCpf] = useState('11111111111');
  const [opportunities, setOpportunities] = useState();
  const [messageError, setViewMessageError] = useState('')
  const [messageSuccess, setViewMessageSuccess] = useState('')
  const [offersSelected, setOffersSelected] = useState([]);
  const [selectedItems, setselectedItems] = useState([])
  // spinners
  const [homeSpinner, setHomeSpinner] = useState(false);
  const [offerSpinner, setOfferSpinner] = useState(false)

  // views
  const [viewOpportunities, setViewOpportunities] = useState(false)
  const [viewGraphs, setViewGraphs] = useState(false)
  const [viewHome, setViewHome] = useState(true)
  const [viewOffers, setViewOffers] = useState(false)
  const [contractView, setContractView] = useState(false)
  const [dashboardView, setDashboardView] = useState(false)
  const [viewError, setViewError] = useState(false)
  const [viewSuccess, setViewSuccess] = useState(false)

  // variaveis de autenticação
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [document, setDocument] = useState('');

  const [offers, setOffers] = useState([]);
  // variaveis de contrato (informações do que o cliente quer)
  const [hireQntInstallments, setHireQntInstallments] = useState();
  const [hireValue, setHireValue] = useState();

  // Alocação da preparação para a requisição
  const [requestData, setRequestData] = useState({});


  const req = new Requests();
  const analyzeInGraphs = () => {
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
      setOpportunities(data);
      setTimeout(() => {
        setHomeSpinner(false)
        setViewOpportunities(true)
        setViewOffers(false)
        setOffers([])
      }, 2000);
    })
  }

  const getOffers = () => {
    setOfferSpinner(true)
    let res = req.getOffers(cpf, offersSelected)
    res.then((data) => {
      setTimeout(() => {
        setViewOpportunities(false)
        setOfferSpinner(false)
        setViewOffers(true)
        setOffers(data)
      }, 5000);
    })
  }

  const HandleOfferSelected = (op, index) => {
    let newOffersSelected = offersSelected;
    if (selectedItems.includes(index)) {
      setselectedItems(selectedItems.filter((itemIndex) => itemIndex !== index))
      newOffersSelected = newOffersSelected.filter((item) => item.instituicao_id !== op.id)
    } else {
      setselectedItems(selectedItems.concat(index))
      op.modalidades.forEach(element => {
        newOffersSelected.push({
          instituicao_id: op.id,
          codModalidade: element.cod,
        })
      });
    }
    setOffersSelected(newOffersSelected)
  }

  const cancelAllViews = () => {
    setHomeSpinner(false);
    setOfferSpinner(false);
    setViewOpportunities(false);
    setViewGraphs(false);
    setViewHome(false);
    setViewOffers(false);
    setContractView(false)
  }

  const selectOfferForContract = (item) => {
    setHireValue(item.offer.valorMin)
    setRequestData({
      name,
      email,
      password,
      document,
      instituicao: item.instituicao,
      instituicao_id: item.instituicao_id,
      codModalidade: item.cod,
      hire_qnt_installments: hireQntInstallments,
      hire_value: hireValue,
      offer_qnt_installments_max: item.offer.QntParcelaMax,
      offer_qnt_installments_min: item.offer.QntParcelaMin,
      offer_juros_mes: item.offer.jurosMes,
      offer_value_max: item.offer.valorMax,
      offer_value_min: item.offer.valorMin
    });
    cancelAllViews()

    setContractView(true)
  }


  const filterBestOffer = (filter) => {
    if (filter === "jurosMes") {
      let bestOfferJurosMes, bestOfferQntParcelaMax, bestOfferQntParcelaMin, bestOfferQntValorMax, bestOfferQntValorMin = null;

      for (let i = 0; i < offers.length; i++) {
        if (!bestOfferJurosMes || offers[i].offer.jurosMes < bestOfferJurosMes.offer.jurosMes) {
          bestOfferJurosMes = offers[i];
        }
        if (!bestOfferQntParcelaMax || offers[i].offer.QntParcelaMax < bestOfferQntParcelaMax.offer.QntParcelaMax) {
          bestOfferQntParcelaMax = offers[i];
        }
      }
      // offers.forEach(offer => {
      //    if(offer.cod === bestOffer.cod){
      //       offer.bestOffer = true
      //    }
      // });
    }
  }

  const calculaValorTotal = (offer) => {
    // Calcula o valor total do empréstimo com base nos parâmetros fornecidos
    const valorTotal = offer.valorMax * Math.pow(1 + offer.jurosMes, offer.QntParcelaMax);

  }

  const handleChangeCpf = (e) => {
    setCpf(e.target.value)
  }

  const returnToHome = () => {
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
    graphsOptions,
    selectOfferForContract,
    getOffers,
    offersSelected,
    selectedItems, setselectedItems
  }
  const contractOptions = {
    requestData,
    name: name,
    email: email,
    password: password,
    document: cpf,
    cpf: cpf,
    hireQntInstallments: hireQntInstallments,
    hireValue: hireValue,
    viewError,
    messageError,
    messageSuccess,
    handleChangeName(e) {
      setName(e.target.value);
    },
    handleChangeEmail(e) {
      setEmail(e.target.value);
    },
    handleChangePassword(e) {
      setPassword(e.target.value);
    },
    handleChangeDocument(e) {
      setCpf(e.target.value);
    },
    handleChangeHireValue(e) {
      setHireValue(e.target.value);
    },
    handleChangeHireQntInstallments(e) {
      setHireQntInstallments(e.target.value);
    },
    handleRequestHireLoan() {
      requestData.name = name;
      requestData.email = email;
      requestData.password = password;
      requestData.document = document;
      requestData.hire_qnt_installments = hireQntInstallments;
      requestData.hire_value = hireValue;

      console.log(requestData);
      // req.hireLoan(requestData)
      //   .then((data) => {
      //     if (data.user) {
      //       setViewMessageSuccess("Solicitado com sucesso. Acompanhe em seu email o status de sua solicitação.");
      //       setViewSuccess(true)
      //     } else {
      //       setViewError(!viewError)
      //       setViewMessageError(data.message)
      //     }
      //   })
    }
  }

  return (
    <div className="App">
      {viewHome && <Home options={homeOptions} />}
      {contractView && <Contract contractOptions={contractOptions} />}
      {dashboardView && <Dashboard />}
    </div>
  );
}

export default App;
