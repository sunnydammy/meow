import React from "react";
import "./Home.css";

class Home extends React.Component{
    render(){
    return(
        <div className="search">
            <input placeholder="Find Book!"/>
            <button>Search</button>
        </div>
    )};
}

export default Home;