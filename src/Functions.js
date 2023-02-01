import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function GetRecipeRandomData(){
    const [recipeRandomData, setRecipeRandomData] = useState(null);
    let navigate = useNavigate();
      
    useEffect(()=> {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=277620b9d50e4ea4bc123f52c019e394&number=2`)
        .then((response) => response.json())
        .then((data) => {
        setRecipeRandomData(data);
        console.log(data);
        })
        .catch((err) => console.error(err));
    }, []);
    return (
    <div>
        {recipeRandomData && recipeRandomData.results.map((listofrecipe) => (
        <div key={listofrecipe.id}>
        <button onClick={() => {navigate("/RecipeInfo/" + listofrecipe.id)}}>"Picture:"<img src={listofrecipe.image} alt="listofrecipe"/> "Name:"{listofrecipe.title}</button>
        </div>
    ))}
    </div>)
}

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
        {recipeInfoData && recipeInfoData.title}
        {recipeInfoData && recipeInfoData.instructions}
        {recipeInfoData && recipeInfoData.cookingMinutes}
        {recipeInfoData && recipeInfoData.preparationMinutes}
        {recipeInfoData && recipeInfoData.readyInMinutes}
        {recipeInfoData && recipeInfoData.servings}
        </div>
    </div>)
  }


export function GetRecipeData(){
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


