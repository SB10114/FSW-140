import React, { useState } from 'react'


function AddFood(props) {

    const initInputs = {
       name: props.name || '',
       year: props.year || '',
       appearances: props.appearances || '',
       current: props.current || '',
       yearsSinceJoining: props.yearsSinceJoining || '',
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
        props.submit(inputs)
        setInputs(initInputs)
    }


    return (
       
        <form className = "addForm" onSubmit={handleSubmit}>
          <span>
            <input 
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                placeholder="Enter Food Title:"
                />
            <input 
                type="text"
                name="appearances"
                value={inputs.appearances}
                onChange={handleChange}
                placeholder="Enter number of appearances:"
                />

            <input 
                type="text"
                name="year"
                value={inputs.year}
                onChange={handleChange}
                placeholder="Added in year: "
                />

            <input 
                type="text"
                name="current"
                value={inputs.current}
                onChange={handleChange}
                placeholder="Current menu item? "
                />

            <input 
                type="text"
                name="yearsSinceJoining"
                value={inputs.yearsSinceJoining}
                onChange={handleChange}
                placeholder="Menu Items: "
                />
            </span>
            <button>Add Food</button>
        </form>
    )
}


export default AddFood;