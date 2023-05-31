import React from 'react';
import './App.css';

import VendingMachine from "./VendingMachine";
import TrailMix from "./TrailMix";
import FruitLeather from "./FruitLeather";
import Pretzels from "./Pretzels";
import NavBar from "./NavBar";

import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <NavBar />
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/trailmix'>
          <TrailMix />
        </Route>
        <Route exact path='/fruitleather'>
          <FruitLeather />
        </Route>
        <Route exact path='/pretzels'>
          <Pretzels />
        </Route>
      </BrowserRouter> 
    </div>  
  );
}

export default App;
