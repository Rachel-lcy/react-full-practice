import { useState } from "react"

function MyComponent(){
  const [foods, setFoods] = useState(["Apple", "Orange", "Mango"]);

  function handleAddFood(){
    const newFood = document.getElementById('foodInput').value;
    if(newFood){
      setFoods(foods => [... foods, newFood]);
    }
    document.getElementById('foodInput').value = ""; 
    
  }

  function handleRemoveFood(index){
      setFoods(foods.filter((element,i) => i !== index));
  }

  return(
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => 
        <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
        </li>)}
      </ul>

      <input type="text" id="foodInput" placeholder="Enter food name"/>
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );








}

export default MyComponent