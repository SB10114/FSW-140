import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <div className= 'navBar'>
            <Link to = '/'>Home</Link>
            <Link to = '/AddFood'>CreateAnItem</Link>
            <Link to = '/FoodRender'>Menu</Link>
        </div>
    )
}