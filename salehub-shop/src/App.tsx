import React from 'react';
import './styles/theme/theme.scss'
import { Switch } from 'react-router-dom'
import RouteWithLayout from './templates/RouteWithLayout'

/* ------------------------PAGES------------------------- */

import Homepage from './pages/Homepage'
import Details from './pages/Details'

type Routes = {
  electronics:string,
  jewelery:string,
  men:string,
  woman:string
}
function App() {
  return (
    <div className="App">
      <Switch>
          <RouteWithLayout exact path="/" component={Homepage} />
        <RouteWithLayout exact path={'/details-electronics/:id'} component={Details} />
        <RouteWithLayout exact path={'/details-jewelery/:id'} component={Details} />
        <RouteWithLayout exact path={'/details-men\'s clothing/:id'} component={Details} />
        <RouteWithLayout exact path={'/details-women\'s clothing/:id'} component={Details} />
      </Switch>
    </div>
  );
}

export default App;
