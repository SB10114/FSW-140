import React, {useState} from 'react'

function UpdateFood(props) {
    const [id, setId] = useState(props.id)

    const initInputs = {
        FoodTitle: props.FoodTitle || '',
        artist: props.artist || '',
        numberOfFoods: props.numberOfFoods || '',
        eatAll: props.eatAll || '',
        menuItems: props.menuItems || '',
     }
    
    const [inputs, setInputs] = useState(initInputs)

    function handleSubmit(e) {
        e.preventDefault()

        props.submit(id, inputs)
        setId(initInputs)
        props.edit(false)
    }
    
    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }


    return(
        <form className = "updateButton" onSubmit={handleSubmit}>
            <h1>
                {inputs.foodTitle}
            </h1>
            <p>
            <input 
                type="text"
                name="foodTitle"
                value={inputs.foodTitle}
                onChange={handleChange}
                placeholder="Enter food Title:"
                />
                </p>
            <p>
            <input 
                type="text"
                name="artist"
                value={inputs.artist}
                onChange={handleChange}
                placeholder="Enter food artist:"
                />
                </p>
            <p>
            <input 
                type="text"
                name="numberOfFoods"
                value={inputs.numberOfFoods}
                onChange={handleChange}
                placeholder="Number of pieces:"
                />
                </p>
            <p>
            <input 
                type="text"
                name="eatAll"
                value={inputs.eatAll}
                onChange={handleChange}
                placeholder="Completed meal:"
                />
                </p>
            <p>
            <input className = "menuStyles"
                type="text"
                name="menuItems"
                value={inputs.menuItems}
                onChange={handleChange}
                placeholder="Menu Items: "
                />
                </p>
        <button>Update</button>
    </form>
    )
}

export default UpdateFood;