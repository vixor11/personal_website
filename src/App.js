import React from 'react';
import Portfolio from './components/portfolio/Portfolio'
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';

import {
  HashRouter, Route, Switch, Redirect
} from 'react-router-dom';
// don't forget the styles

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Switch>
          <Redirect path="/" exact to="/portfolio"/> 
          <Route path="/portfolio" component={Portfolio}/> 
          <Route path="/about" component={About}/>
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
