import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Requests from './Requests'
function App() {

  const req = new Requests();
  function setOportunities(){
    let opportunities = req.getOpportunities(11111111111);
     opportunities.then((data) => {
      console.log(data);
    })
  }
  setOportunities();
  return (
    <div className="App">
       <Home />
    </div>
  );
}

export default App;
