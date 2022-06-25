import './App.scss';
import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from "react-router-dom";


import HomePage from './page/HomePage';


class App extends React.Component {
  


  render() {

  

    return (
        <BrowserRouter>
          <Switch>
                <Route path="/" exact component={HomePage}/>
                     <Route path ='/pokemon/:id' component={HomePage} />
            </Switch>
        </BrowserRouter>


       
    );
  }


}

export default App;
