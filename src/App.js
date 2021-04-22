
import './App.css';

import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WelcomePage from './pages/welcome_pg';
import RegisterPage from './pages/register_pg';
import Header from './components/Header';
import DogProfile from './pages/dogProfile_pg';

function App() {
  let dog = {
    name: "Molly",
    sex: "female",
    breed: "briard",
    img: "https://images.dog.ceo/breeds/briard/n02105251_6840.jpg",
    present: false,
    age: 4,
    chipNumber: "IEH455006",
    owner: {
      name: "Wilmer",
      lastName: "Svensson",
      phoneNumber: "0769239356"
    }
  }
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/"> <WelcomePage/> </Route>
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