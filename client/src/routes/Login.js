import React from "react";
import NaverAuth from "../components/NaverAuth";
import KakaoAuth from "./KakaoAuth";

function Login() {
  return (
    <div>
      <h1>로그인</h1>
      <input placeholder="ID"></input>
      <input placeholder="Password"></input>
      <button>로그인</button>
      <button>회원가입</button>
      <NaverAuth></NaverAuth>
      <KakaoAuth></KakaoAuth>
    </div>
  );
}

export default Login;
