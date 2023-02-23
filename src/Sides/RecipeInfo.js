import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SearchRecipe } from "./Main";

export default function RecipeInfo() {
  return (
    <div className='recipeinfo'>
      <SearchRecipe />
      {<GetRecipeInfo />}
    </div>
  )
}


export function GetRecipeInfo(){
  let { id } = useParams()
  const [recipeInfoData, setRecipeInfoData] = useState(null);
  let navigate = useNavigate();
    
  useEffect(()=> {
      fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=277620b9d50e4ea4bc123f52c019e394`)
      .then((response) => response.json())
      .then((data) => {
      setRecipeInfoData(data);
      console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
  <div>
      <button onClick={() => {navigate('/RecipeList')}}>Back</button>
      <div key={recipeInfoData && recipeInfoData.id}>
      <img src={recipeInfoData && recipeInfoData.image} alt="recipe"/><br />
      Title:{recipeInfoData && recipeInfoData.title}<br />
      Instruction:<div contentEditable='true' SetInnerHTML={{ __html: recipeInfoData && recipeInfoData.instructions }}></div><br />
      Zutaten:
      {recipeInfoData && recipeInfoData.extendedIngredients.map((ingredientlist) => (
        <div key={ingredientlist.id}>
          <li>
            {ingredientlist.name}
          </li>
        </div>
      ))}
      ready in min:{recipeInfoData && recipeInfoData.readyInMinutes}<br />
      servings:{recipeInfoData && recipeInfoData.servings}<br />
      </div>
  </div>)
}