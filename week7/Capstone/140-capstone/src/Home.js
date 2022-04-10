import './App.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import FoodRender from './Components/FoodRender';
import AddFood from './Components/AddFood';

const baseURL = "/avengers";

export default function Home() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, [])

  //console.log('post: ', post)

  const [food, setFood] = useState([])
  const [query, setQuery] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setQuery(prevInputs => ({...prevInputs, [name]: value}))
}

  function getFood() {
    axios.get('/avengers')
      .then(res => {setFood(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  function getOneFood(e) {
    var id= query.query
    if(query.query){e.preventDefault()}
    else{id = e}
    console.log(id)
    axios.get(`/avengers/search/avengers_ID?avengers_ID=${id}`)
      .then(res => {console.log(res.data)
        setFood(res.data)})
      .catch(err => console.log(err))
  }

  function addFood(updates) {
    // updates.readAll = (updates.readAll === "true" ? true : false)  
console.log(updates)
    axios.post(`/avengers`, updates)
    .then(res => {
      console.log(food.length)
      //setQuery({query: 178})
      getOneFood(food.length)
    })
    .catch(err => console.log(err))
  }

  function deleteFood(id) {
    axios.delete(`/avengers/${id}`)
    .then(res => getFood())
    .catch(err => console.log(err))
  }

  function updateFood(id, updates) {
    updates.readAll = (updates.readAll === "true" ? true : false) 
   
    axios.put(`/avengers/${id}`, updates)
    .then(res => getFood())
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getFood()
  }, [])

  
  return (
    <div className = 'app'>
      <h1>Welcome to the Retribution Cafe!</h1>
      <div>
        <AddFood submit={addFood} />
    </div>
     <form className = "queryForm">
       <input  name="query" onChange={handleChange} placeholder= "Enter # in Food:"></input>
       <button onClick={getOneFood}>Search by #</button>
     </form>
    <div>
        {food.map((foods, index) =>{ 
          // console.log(foods)
        return (<FoodRender
            key={index}
            FoodsTitle = {foods.name}
            created = {foods.year}
            eatAll = {foods.current}
            number = {foods.appearances}
            menuItems = {foods.yearsSinceJoining}
            id = {foods.avenger_ID} 
            updateFood = {updateFood}
            deleteFood = {deleteFood} 
            />
         ) } )}
      </div>
    </div>
    );
  }
