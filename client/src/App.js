import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import KakaoAuth from "./routes/KakaoAuth";
import './App.css';

function App() {
  return (
    // <HashRouter>
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/kakao_auth/:params" component={KakaoAuth}></Route>
      <Route path="/kakao_auth" exact={true} component={KakaoAuth}></Route>
    </BrowserRouter>
    // </HashRouter>
  );
}

export default App;
