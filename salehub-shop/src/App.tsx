import React from 'react';
import './styles/theme/theme.scss'
import { Switch } from 'react-router-dom'
import RouteWithLayout from './templates/RouteWithLayout'

/* ------------------------PAGES------------------------- */

import Homepage from './pages/Homepage'
import DetailsElectronics from './pages/details/DetailsElectronics'
import DetailsJewellery from './pages/details/DetailsElectronics'
import DetailsWomensClothing from './pages/details/DetailsElectronics'
import DetailsMensClothing from './pages/details/DetailsElectronics'

function App() {
  return (
    <div className="App">
      <Switch>
        <RouteWithLayout exact path="/" component={Homepage} />
        <RouteWithLayout exact path="/details-electronics/:id" component={DetailsElectronics} />
        <RouteWithLayout exact path="/details-jewelery/:id" component={DetailsJewellery} />
        <RouteWithLayout exact path="/details-men's clothing/:id" component={DetailsWomensClothing} />
        <RouteWithLayout exact path="/details-women's clothing/:id" component={DetailsMensClothing} />
      </Switch>
    </div>
  );
}

export default App;
