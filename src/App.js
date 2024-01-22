import './App.css';
import React from 'react';
import VendingMachine from "./VendingMachine";

import Chardonnay from "./Chardonnay";
import MushroomRisotto from "./MushroomRisotto";
import ChowderBowl from "./ChowderBowl";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


/** App for Vending Machine application.
 *
 *  Props: none
 *
 *  States: none
 *
 *  Renders:
 *    App -> VendingMachine
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/chowder-bowl" element={<ChowderBowl/>} />
          <Route path="/mushroom-risotto" element={<MushroomRisotto/>} />
          <Route path="/chardonnay" element={<Chardonnay/>} />
          <Route path="/" element={<VendingMachine/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;