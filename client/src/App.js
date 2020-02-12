import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
    </HashRouter>
  );
}

export default App;
