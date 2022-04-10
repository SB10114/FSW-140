import { useState } from "react";
import DeleteFoods from "./DeleteFoods";
import UpdateFoods from './UpdateFoods';


function FoodRender({menuItems, created, eatAll, FoodsTitle, deleteFoods, updateFoods, number, id}) {


    const [editMode, setEditMode] = useState(false)

    function setEdit(edit) {
      setEditMode(edit)
    }


    return (
        <div className = "rendering">
          { !editMode ?
            <>
              <p> Foods: {FoodsTitle} </p>
              <p> created: {created} </p>
              <p> Eat: {eatAll === 'YES' ? 'true' : 'false'}</p>
              <p> # of Foods: {number} </p>
              <p> Menu Items: {menuItems} </p>
              <p> id = {id} </p>

              <DeleteFoods id = {id} submit = {deleteFoods} />

              <button onClick={() => setEdit(true)}>Edit</button>
            </>
            :
            <>
              <UpdateFoods 
                avenger_ID = {id} 
                submit = {updateFoods} 
                edit = {setEdit}
                name={FoodsTitle}
                year = {created}
                current = {eatAll}
                appearances = {number}
                yearsSinceJoining = {menuItems}
              />
              <button onClick={() => setEdit(false)}>Cancel</button>
            </>
            
          }

        </div>
    )
}

export default FoodRender;