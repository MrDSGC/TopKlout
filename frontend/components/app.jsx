import React from 'react';
import NavbarContainer from './header_bar/navbar_container';
import {
  Route,
  Switch
} from 'react-router-dom';
const App = () => (
  <div>
    <header className="navbar">
      <div className='logo'>
        <span>TOPCLOUT</span>
      </div>
      <NavbarContainer/>
    </header>
    <Switch>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} /> 
    </Switch>
  </div>
)

export default App;
