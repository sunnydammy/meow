import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    // Link has to be inside Router
    return <div>
        <Link to="/">Home</Link>
    </div>
}

export default Navigation;