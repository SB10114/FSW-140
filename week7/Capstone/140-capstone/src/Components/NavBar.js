import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <div className= 'navBar'>
            <Link to = '/HomePage'>Home</Link>
            <Link to = '/AddFood'>Create Yours!</Link>
            <Link to = '/FoodRender'>Menu</Link>
        </div>
    )
}