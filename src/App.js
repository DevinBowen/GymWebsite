import React from 'react';
import './css/reset.css';
import './css/App.css';
import routes from './routes';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <div className='logo'>
        <div>
        DEVIN
        </div>
        <div>
        BOWEN
        </div>
        </div>
        <a className="ham"></a>
      </header>
      <div className="lb">
        <img src={require("./img/lb.png")} alt="lb" />
      </div>
      <div className="hbg"></div>

      <div className='main'>
          {routes}
      </div>



      <footer>
        Developed and run by Devin Bowen.
      </footer>
      
    </div>
  );
}

export default App;
