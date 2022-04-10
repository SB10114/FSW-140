import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <div className= 'navBar'>
            <Link to = '/'>Home</Link><br></br>
            {/* <Link to = '/AddFood'>Menu</Link><br></br> */}
            <Link to = '/FoodRender'>Create</Link><br></br>
        </div>
    )
}