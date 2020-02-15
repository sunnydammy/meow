import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    // Link는 Router안에 위치해야 한다 (App.js)
    return <div>
        <Link to="/">Home</Link>
        <Link to="/kakao_auth">KakaoAuth</Link>
    </div>
}

export default Navigation;