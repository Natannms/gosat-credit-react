import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Requests from './Requests'
function App() {

  const req = new Requests();
  function setOportunities(cpf){
    let opportunities = req.getOpportunities(cpf);
     opportunities.then((data) => {
      console.log(data);
    })
  }
  setOportunities(11111111111);
  return (
    <div className="App">
       <Home />
    </div>
  );
}

export default App;
