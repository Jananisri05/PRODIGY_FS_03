import React from "react";
import { Link } from "react-router-dom";

function Home()
{
    
    return(
    <div className="home-container">
        <h1 className="home-title">Welcome to Ecommerce app</h1>
        <Link className="home-btn"to='/getProduct'>View Products</Link></div>
    );
}
export default Home;
