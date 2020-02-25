import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
// import KakaoAuth from "./routes/KakaoAuth";
import Detail from "./routes/Detail";
import Login from "./routes/Login";
import "./App.css";

function App() {
  return (
    // <HashRouter>
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/:page" component={Home}></Route>
      {/* <Route path="/kakao_auth/:params" component={KakaoAuth}></Route> */}
      {/* <Route path="/kakao_auth" exact={true} component={KakaoAuth}></Route> */}
      <Route path="/book/:id" component={Detail} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
    // </HashRouter>
  );
}

export default App;
