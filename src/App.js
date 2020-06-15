import React from 'react';
import Portfolio from './components/portfolio/Portfolio'
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Press from './components/press/Press';
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
          <Route path="/" exact component={Portfolio}/> 
          <Route path="/portfolio" component={Portfolio}/> 
          <Route path="/about" component={About}/>
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
