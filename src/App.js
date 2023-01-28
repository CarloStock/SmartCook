import React, {useState} from "react";
import Recipelist from "./Recipelist";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

const diet = "vegetarien"
const tolerance = "gluten";
const ingredients = "tomato,cheese";
const [recipeData, setRecipe] = useState(null);

function getRecipeData(){

        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=277620b9d50e4ea4bc123f52c019e394&includeIngredients=${ingredients}&sort=min-missing-ingredients&intolerances=${tolerance}&diet=${diet}`)
        .then((response) => response.json())
        .then((data) => {
        setRecipe(data);
        console.log(data);
    });
    }

  return (
    <div>
          <button onClick={() => <Router><Routes><Route exact path="/recipelist" element={() => <Recipelist recipeData = {getRecipeData}/>}/></Routes></Router>}>
            Recipe
          </button>
          {recipeData && <Recipelist recipeData={recipeData}/>}
    </div>
  );
}

export default App;

