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
        Devin
        </div>
        <div>
        Bowen
        </div>
        </div>
        <a className="ham">
        </a>
        {/* <div className='nav' >
        <Link to='/' style={{textDecoration: "none"}}>Home</Link>
        <Link to='/training' style={{textDecoration: "none"}}>Training</Link>
        <Link to='/nutrition' style={{textDecoration: "none"}}>Nutrition</Link>
        </div> */}
      </header>
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
