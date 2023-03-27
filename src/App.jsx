import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Requests from './Requests'
import { useState } from 'react';
import { Graphs } from './Graphs';
import Contract from './Contract/Index';
import Dashboard from './Dashboard/Dashboard';
import Authentication from './Authentication';


function App() {
  const [cpf, setCpf] = useState('11111111111');
  const [opportunities, setOpportunities] = useState();
  const [messageError, setViewMessageError] = useState({})
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
  const [viewLogin, setViewLogin] =  useState(false);
  const [fieldErros, setFieldErros] = useState({})
  // variaveis de autenticação
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [document, setDocument] = useState('');

  const [offers, setOffers] = useState([]);
  const [contracts, setContracts] = useState([]);

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
    setViewOpportunities(false)
    setViewGraphs(false)
    setViewHome(false)
    setViewOffers(false)
    setContractView(false)
    setDashboardView(false)
    setViewError(false)
    setViewSuccess(false)
    setViewLogin(false)
    setFieldErros(false)
  }

  const clearUserData = ()=>{
    setName('')
    setEmail('')
    setPassword('')
    setCpf('')
    setRequestData({})
    setOpportunities(null)
    setViewMessageError({})
    setViewMessageSuccess('')
    setOffersSelected([])
    setselectedItems([])
  }

  const selectOfferForContract = (item) => {
    console.log("ITEM:", item);
    setHireValue(item.offer.valorMin)
    setRequestData({
      instituicao_id: item.instituicao_id,
      codModalidade: item.codModalidade,
      hire_qnt_installments: hireQntInstallments,
      hire_value: hireValue,
      offer_qnt_installments_max: item.offer.QntParcelaMax,
      offer_qnt_installments_min: item.offer.QntParcelaMin,
      offer_juros_mes: item.offer.jurosMes,
      offer_value_max: item.offer.valorMax,
      offer_value_min: item.offer.valorMin
    });
    // cancelAllViews()

    setContractView(true)
    console.log("EXECUTEI AGORA", requestData);

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

  const register = async () => {
    try {
      const data = await req.register({
        name,
        email,
        password,
        document: cpf,
      });

      if (data.statusCode === 400 || data.statusCode === 500) {
        setViewError(!viewError);
        setViewMessageError(data.message);
        console.log("register error:", messageError);
        return false;
      }

      if (data.statusCode === 200 || data.statusCode === 201) {
        // set di in localStorage
        localStorage.setItem("user", JSON.stringify(data.user));
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const registerContract = async ()=>{
    const registroEfetuado = await register();
    if (!registroEfetuado) {
      alert("Erro ao cadastrar usuario");
    }else{
      alert("registrado com sucesso !")
      const user = JSON.parse(localStorage.getItem("user"));
      const banco = opportunities.find(item => item.id === requestData.instituicao_id);

      requestData.hire_qnt_installments = hireQntInstallments ? hireQntInstallments : requestData.offer_qnt_installments_min;
      requestData.hire_value = hireValue;
      requestData.instituicao = banco.nome
      requestData.user_id = user.id

      console.log("Request Data", requestData);
      req.createContract(requestData)
      .then((data) => {
        console.log("create Contract", data);
        if(data.statusCode === 200 || data.statusCode === 201){
          cancelAllViews()

          setViewLogin(true)
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }

    if(registroEfetuado){
      // get contrato

    }
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
    selectedItems, setselectedItems,
    setViewLogin,
    cancelAllViews,
    dashboardView
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
      registerContract();

      }
  }

  const authOptions = {
    email,
    password,
    handleChangeEmail(e) {
      setEmail(e.target.value);
    },
    handleChangePassword(e) {
      setPassword(e.target.value);
    },

    login(){
      req.login({email, password})
      .then((data) => {
        console.log("login", data);
        if(data.statusCode === 200 || data.statusCode === 201){
          localStorage.setItem("token", JSON.stringify(data.token));
          cancelAllViews()
          setDashboardView(true)
          getContract(data.user.id)
        }

        if(data.statusCode === 400 || data.statusCode === 500){
          console.log(data);
          // setViewError(!viewError);
          // setViewMessageError(data.message);
          // console.log("register error:", messageError);
          alert(messageError)
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  const getContract =() =>{
    const token =  JSON.parse(localStorage.getItem("token"));
    // get de first char from token
    const tokenFirstChar = token.charAt(0);
    req.getContract(tokenFirstChar)
    .then((data) => {
    console.log("contracts",data)
      let newContracts =  contracts;
      newContracts.push(data)
      setContracts(newContracts)
    })
    .catch((err) => {
      console.log(err);
    })
  }


  const dashboardOptions = {
    logo: 'Gosat Credits',
    // get toke fro localstorage
    userToken:  JSON.parse(localStorage.getItem("token")),
    setViewLogin,
    setDashboardView,
    clearUserData,
    cancelAllViews,
    contracts
  }
  return (
    <div className="App">
      {viewHome && <Home options={homeOptions} />}
      {contractView && <Contract contractOptions={contractOptions} />}
      {dashboardView && <Dashboard dashboardOptions={dashboardOptions} />}
      {viewLogin && <Authentication AuthOptions={authOptions}/>}
    </div>
  );
}

export default App;
