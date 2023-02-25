import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState, setGlobalState } from "../state";
import { SearchRecipe } from "./Main";
import replaceImage from "../images/3253638.png";

export default function RecipeList() {

  return (
    <div className="recipelistback">
        <GetRecipeData/>
        <SearchRecipe/>
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
  const errorImage = replaceImage
  

  useEffect(()=> {
      fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=277620b9d50e4ea4bc123f52c019e394&includeIngredients=${ingredientsString}&sort=min-missing-ingredients&intolerances=${intolerancesString}&diet=${dietString}&number=10`)
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

  const onError = (e) => {
    e.target.src=errorImage
  }

  return (
  <div className="backposition">
    <button onClick={() => handlehistory()}>Back to Main</button>
      <div className="recipelist">
      {recipeData && recipeData.results.map((listofrecipe) => (
        <div key={listofrecipe.id}>
          <button className="randombutton" onClick={() => {navigate("/RecipeInfo/" + listofrecipe.id)}}>
            <img src={listofrecipe.image ? listofrecipe.image : errorImage} 
              onError={onError} 
              alt="listofrecipe" 
              width={500} height={340}/> <br/>
            {listofrecipe.title}
          </button>
        </div>
      ))}
      </div>
  </div>
  )
}