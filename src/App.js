import React from 'react';
import './App.css';
import routes from './routes';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        WORKOUT and NUTRITION
      </header>


      <body>
        <div>Workouts</div>
        <div>Nutrition</div>
      </body>


      <footer>
        Developed and run by Devin Bowen.
      </footer>
      <div>
        <Link to='/' >Home</Link>
        <Link to='/training' >Training</Link>
        <Link to='/nutrition' >Nutrition</Link>
      </div>
      {routes}
    </div>
  );
}

export default App;
