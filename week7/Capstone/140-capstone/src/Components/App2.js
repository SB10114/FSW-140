import React from 'react';
import Home from '../Home';
import {Routes, Route} from 'react-router-dom';
import AddFood from './AddFood';
import FoodRender from './FoodRender';
import NavBar from './NavBar';

export default function App2(){
    return(
        <div>
            <NavBar/>
        <Routes>
            <Route
                path= '/' exact
                element = {<Home/>}
                />
                <Route
                path= '/AddFood' exact
                element = {<AddFood/>}
                />
                <Route
                path= '/FoodRender' exact
                element = {<FoodRender/>}
                />
            </Routes>
      </div>
    )
}
