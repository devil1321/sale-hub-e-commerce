import React from 'react';
import './styles/theme/theme.scss'
import { Switch } from 'react-router-dom'
import RouteWithLayout from './templates/RouteWithLayout'
import Homepage from './pages/Homepage'
function App() {
  return (
    <div className="App">
      <Switch>
        <RouteWithLayout exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
