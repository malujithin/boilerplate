import React, { Component } from 'react';
import './app.css';
import Login from '../../components/Login/login';
// import Home from '../components/Home/Home';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import { Route } from 'react-router-dom';
import LoginPage from '../loginPageContainer'
import HomePage from '../HomePageContainer'
import { BrowserRouter} from 'react-router-dom';
import history from '../../history.js';
class App extends Component {


//states w/o constructor
  state = {
    persons:[
      {name:'max',age:29},
      {name:'max2',age:292},
    ]
  }
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
        <div className="loadingIndicatorMain" id="loadingIndicatorMain">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
          </div>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home_page" exact component={HomePage} />
        </ErrorBoundary>
      </div>
      
    );
  }
}

export default App;
