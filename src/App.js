
import './App.css';

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WelcomePage from './pages/welcome_pg.js';
import RegisterPage from './pages/register_pg.js';
import Header from './components/Header.js';


function App() {

  return (
    <Router basename="/dd">
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/"> <WelcomePage/> </Route>
          <Route path="/register">  <RegisterPage/> </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
/*
api hundar https://api.jsonbin.io/b/5f4d604b514ec5112d136cd6

Trevlig välkomstsida där man hälsas välkommen
Register där samtliga kunder som registrerats finns med ( dogs.json )
Info om varje hund som finns i registret layoutat och CSS:at vackert


För VG krävs dessutom
att WebbAppen är anpassade både för mobil och desktop.

Och att antingen:
din API-interaktion är utbruten i en separat .js-fil och återanvänds på de olika ställen du behöver den.
att din hämtade data landar först i localStorage och sedan hämtas därifrån i första hand
*/