import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Homepage/HomePage.component';
import shopPage from './pages/shop/shop.component'; 

import './App.css';

class App extends React.Component{
  render(){
      return (
         <div>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={shopPage}/>    
          </Switch>      
        </div>
      );
    }
  }

  export default App;