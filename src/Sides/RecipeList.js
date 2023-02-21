import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState, setGlobalState } from "../state";

export default function RecipeList() {

  return (
    <div className="recipelist">
        {<GetRecipeData/>}
    </div>
);
}

export function GetRecipeData(){
  const [diet] = useGlobalState("diet");
  const [intolerances] = useGlobalState("intolerance");
  const [ingredients] = useGlobalState("ingredients");
  const dietString = diet.join();
  const intolerancesString = intolerances.join();
  const ingredientsString = ingredients.join();
  const [recipeData, setRecipeData] = useState(null);
  let navigate = useNavigate();
  

  useEffect(()=> {
      fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=277620b9d50e4ea4bc123f52c019e394&includeIngredients=${ingredientsString}&sort=min-missing-ingredients&intolerances=${intolerancesString}&diet=${dietString}&number=2`)
      .then((response) => response.json())
      .then((data) => {
      setRecipeData(data);
      console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handlehistory = () => {
    setGlobalState("diet", [])
    setGlobalState("intolerance", [])
    navigate("/")
  }

  return (
  <div>
      <button onClick={() => handlehistory()}>Back to Main</button>
      {dietString}
      {ingredientsString}
      {intolerancesString}
      {recipeData && recipeData.results.map((listofrecipe) => (
      <div key={listofrecipe.id}>
      <button onClick={() => {navigate("/RecipeInfo/" + listofrecipe.id)}}>"Bild:"<img src={listofrecipe.image} alt="listofrecipe"/> "Name:"{listofrecipe.title}</button>
      </div>
  ))}
  </div>
  )
}
