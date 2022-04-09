import React, {useState} from 'react'

function DeleteFoods (props) {
    const [id, setId] = useState(props.id)


    function handleSubmit(e) {
        e.preventDefault()

        props.submit(id)
        setId()
    }

    return (
        <form onSubmit={handleSubmit}>
            <button>Delete Items</button>
        </form>
    )
}

export default DeleteFoods;
