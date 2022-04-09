import React, { useState } from 'react'
import NavBar from './NavBar'

function AddFood(props) {

    const initInputs = {
       FoodTitle: props.FoodTitle || '',
       artist: props.artist || '',
       numberOfFoods: props.numberOfFoods || '',
       eatAll: props.eatAll || '',
       menuItems: props.menuItems || '',
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()

        var newInputs = {...inputs, menuItems: inputs.menuItems.split(',')}

        props.submit(newInputs)
        setInputs(initInputs)
    }


    return (
       
        <form className = "addForm" onSubmit={handleSubmit}>
            <NavBar/>
          <span>
            <input 
                type="text"
                name="FoodTitle"
                value={inputs.FoodTitle}
                onChange={handleChange}
                placeholder="Enter Food Title:"
                />
            <input 
                type="text"
                name="artist"
                value={inputs.artist}
                onChange={handleChange}
                placeholder="Enter Food artist:"
                />

            <input 
                type="text"
                name="numberOfFoods"
                value={inputs.numberOfFoods}
                onChange={handleChange}
                placeholder="Number in Food:"
                />

            <input 
                type="text"
                name="eatAll"
                value={inputs.eatAll}
                onChange={handleChange}
                placeholder="Completed Food:"
                />

            <input 
                type="text"
                name="menuItems"
                value={inputs.menuItems}
                onChange={handleChange}
                placeholder="Menu Items: "
                />
            </span>
            <button>Add Food</button>
        </form>
    )
}


export default AddFood;