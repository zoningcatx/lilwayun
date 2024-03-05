import logo from './assets/logo.png';
import './App.css';
import TG from "./assets/TG.svg"
import TW from "./assets/TW.svg"
import lilwayne from "./assets/lilwayne.png"

function App() {

  const ticker = "$YMCMB"

  return (
    <div className="App">
      <div className="section1">
        <div className="main">
          <img alt="logo" className="logo" src={logo}/>
          <h1 className="heading">Yung Muney Cush Muney Bullioners</h1>
          <a href="https://t.me/link"><button className="button">BUY {ticker}</button></a>
          <div className="socialsBlock">
            <a href="https://t.me/link" target="_blank" rel="noopener noreferrer"><img className="social" alt="TG" src={TG} /></a>
            <a href="https://twitter.com/link" target="_blank" rel="noopener noreferrer"><img className="social" alt="TW" src={TW} /></a>
          </div>
          <div className="batjockBlock"><img alt="batjok" className="lilwayne" src={lilwayne}/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
