import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import KakaoAuth from "./routes/KakaoAuth";
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/kakao_auth" exact={true} component={KakaoAuth}></Route>
    </HashRouter>
  );
}

export default App;
