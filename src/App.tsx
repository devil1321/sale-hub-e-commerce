import React from 'react';
import './styles/theme/theme.scss'
import { Switch } from 'react-router-dom'
import RouteWithLayout from './templates/RouteWithLayout'

/* ------------------------PAGES------------------------- */

import Home from './pages/Home'
import All from './pages/All'
import Details from './pages/Details'
import Electronics from './pages/category/Electronics'
import Jewlery from './pages/category/Jewelery'
import MensClothing from './pages/category/MensClothing'
import WomenClothing from './pages/category/WomenClothing'
import Checkout from './pages/Checkout'
import Bag from './pages/Bag'
import NotFound from './pages/404'
import Success from './pages/Success';
import Cancel from './pages/Cancel';
function App() {
  return (
    <div className="App">
      <Switch>
        <RouteWithLayout exact path="/" component={Home} />
        <RouteWithLayout exact path="/all" component={All} />

        <RouteWithLayout exact path={'/category/electronics'} component={Electronics} />
        <RouteWithLayout exact path={'/category/jewelery'} component={Jewlery} />
        <RouteWithLayout exact path={'/category/men`s clothing'} component={MensClothing} />
        <RouteWithLayout exact path={'/category/women`s Clothing'} component={WomenClothing} />
   
        <RouteWithLayout exact path={'/details-electronics/:id'} component={Details} />
        <RouteWithLayout exact path={'/details-jewelery/:id'} component={Details} />
        <RouteWithLayout exact path={'/details-men\'s clothing/:id'} component={Details} />
        <RouteWithLayout exact path={'/details-women\'s clothing/:id'} component={Details} />

        <RouteWithLayout exact path={'/bag'} component={Bag} />
        <RouteWithLayout exact path={'/checkout'} component={Checkout} />
        <RouteWithLayout exact path={'/success'} component={Success} />
        <RouteWithLayout exact path={'/cancel'} component={Cancel} />

        <RouteWithLayout exact path={'*'} component={NotFound} />

      
      </Switch>
    </div>
  );
}

export default App;
