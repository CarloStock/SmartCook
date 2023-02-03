import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeList() {

  return (
    <div className="recipelist">
        {/*{<GetRecipeData/>}*/}
    </div>
);
}

{/*export function GetRecipeData(){
  const diet = "vegetarien"
  const tolerance = "gluten";
  const ingredients = "tomato,cheese";
  const [recipeData, setRecipeData] = useState(null);
  let navigate = useNavigate();
    
  useEffect(()=> {
      fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=277620b9d50e4ea4bc123f52c019e394&includeIngredients=${ingredients}&sort=min-missing-ingredients&intolerances=${tolerance}&diet=${diet}&number=2`)
      .then((response) => response.json())
      .then((data) => {
      setRecipeData(data);
      console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
  <div>
      {recipeData && recipeData.results.map((listofrecipe) => (
      <div key={listofrecipe.id}>
      <button onClick={() => {navigate("/RecipeInfo/" + listofrecipe.id)}}>"Bild:"<img src={listofrecipe.image} alt="listofrecipe"/> "Name:"{listofrecipe.title}</button>
      </div>
  ))}
  </div>)
}
*/}