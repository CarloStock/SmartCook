import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipeInfo() {
  return (
    <div className='recipeinfo'>
     {/* {<GetRecipeInfo />}*/}
    </div>
  )
}

{/*
export function GetRecipeInfo(){
  let { id } = useParams()
  const [recipeInfoData, setRecipeInfoData] = useState(null);
    
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
      <div key={recipeInfoData && recipeInfoData.id}>
      <img src={recipeInfoData && recipeInfoData.image} alt="recipe"/><br />
      Title:{recipeInfoData && recipeInfoData.title}<br />
      Instruction:<div contentEditable='true' dangerouslySetInnerHTML={{ __html: recipeInfoData && recipeInfoData.instructions }}></div><br />
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
*/}

{/*
      {(() => {
        if (recipeInfoData && recipeInfoData.cookingMinutes === -1){
          return(
            <div>
              cookingminute = 0<br />
            </div>
          );
        }
        else{
          return(
            <div>
              Cooking min:{recipeInfoData && recipeInfoData.cookingMinutes}<br />
            </div>
          );
        }
      })()}
      {(() => {
        if (recipeInfoData && recipeInfoData.preparationMinutes === -1){
          return(
            <div>
              prep.Time = 0<br />
            </div>
          ); 
        }
        else{
          return(
            <div>
              Prep. time:{recipeInfoData && recipeInfoData.preparationMinutes}<br />
            </div>
          );
        }
      })()}
      */}