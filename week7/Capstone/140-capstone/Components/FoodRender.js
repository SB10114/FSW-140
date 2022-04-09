import { useState } from "react";
import DeleteFoods from "./DeleteFoods";
import UpdateFoods from './UpdateFoods';

function FoodRender({MenuItems, artist, eatAll, deleteFoods, updateFoods, numberOfFoods, menuItems, id}) {


    const [editMode, setEditMode] = useState(false)

    function setEdit(edit) {
      setEditMode(edit)
    }


    return (
        <div className = "inputs">

          { !editMode ?
            <>
              <p> Foods: {MenuItems} </p>
              <p> Artist: {artist} </p>
              <p> Eat: {eatAll ? 'true' : 'false'}</p>
              <p> # of Foods: {numberOfFoods} </p>
              <p> Menu Items: {menuItems} </p>
              <p> id = {id} </p>

              <DeleteFoods id = {id} submit = {deleteFoods} />

              <button onClick={() => setEdit(true)}>Edit</button>
            </>
            :
            <>
              <UpdateFoods 
                id = {id} 
                submit = {updateFoods} 
                edit = {setEdit}
                FoodsTitle={FoodsTitle}
                artist = {artist}
                eatAll = {eatAll}
                numberOfFoods = {numberOfFoods}
                menuItems = {menuItems}
              />
              <button onClick={() => setEdit(false)}>Cancel</button>
            </>

          }

        </div>
    )
}

export default FoodRender;