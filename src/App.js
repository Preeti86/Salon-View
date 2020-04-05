import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Homepage/HomePage.component';
import shopPage from './pages/shop/shop.component'; 
import Header from './components/header/header.component';

import './App.css';

class App extends React.Component{
  render(){
      return (
         <div>
           <Header/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={shopPage}/>    
          </Switch>      
        </div>
      );
    }
  }

  export default App;