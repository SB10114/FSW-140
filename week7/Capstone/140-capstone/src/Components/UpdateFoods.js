import React, {useState} from 'react'

function UpdateFood(props) {
    const [id, setId] = useState(props.id)

    const initInputs = {
        name: props.name || '',
        year: props.year || '',
        appearances: props.appearances || '',
        current: props.current || '',
        yearsSinceJoining: props.yearsSinceJoining || '',
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
                placeholder="Enter number of pieces:"
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
        <button>Update</button>
    </form>
    )
}

export default UpdateFood;