import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <div className= 'navBar'>
            <Link to = '/'>Home</Link><br></br>
            <Link to = '/AddFood'>CreateAnItem</Link><br></br>
            <Link to = '/FoodRender'>Menu</Link><br></br>
        </div>
    )
}