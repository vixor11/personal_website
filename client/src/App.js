import React from 'react';
import Portfolio from './components/portfolio/Portfolio'
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Admin from './components/admin/Admin';

// import Admin from './components/admin/Admin';

import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect path="/" exact to="/about"/> 
          <Route path="/portfolio" component={Portfolio}/> 
          <Route path="/about" component={About}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/admin" component={Admin}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
