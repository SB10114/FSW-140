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
                path= '/HomePage'
                component = {App}
                />
                <Route
                path= '/AddFood'
                component = {AddFood}
                />
                <Route
                path= '/FoodRender'
                component = {FoodRender}
                />
            </Routes>
      </div>
    )
}
