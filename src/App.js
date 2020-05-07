import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { Provider } from './context';

import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';

import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/pages/Test';
import EditContact from './components/contacts/EditContact';

function App() {
  const branding = "Contact Manager";
  return (
    <Provider>
      <Router>
        <div>
          <Header branding={branding} />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/contact/add" component={AddContact}></Route>
              <Route exact path="/contact/edit/:id" component={EditContact}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/test" component={Test}></Route>
              <Route component={NotFound}></Route>              
            </Switch>
          </div>
        </div>
      </Router>
      
    </Provider>
    
  );
}

export default App;
