import React from 'react';
import App from '../App';
import {Routes, Route} from 'react-router-dom';
import AddFood from './AddFood';
import FoodRender from './FoodRender';

export default function App2(){
    return(
        <div>
        <Routes>
            <Route
                path= '/' exact
                element = {<App/>}
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
