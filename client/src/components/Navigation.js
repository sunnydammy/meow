import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  // Link는 Router안에 위치해야 한다 (App.js)
  return (
    <nav className="nav">
      <span className="nav__title">책을 검색하는 사이트이다</span>
      <div className="nav__route">
        <Link to="/">
          <i className="fas fa-home">Home</i>
        </Link>
        {/* <Link to="/kakao_auth">KakaoAuth</Link> */}
        {/* <Link to="/naver_auth">NaverAuth</Link> */}
        <Link to="/login">
          <i className="fas fa-user">Login</i>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
