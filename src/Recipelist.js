import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeInfo from "./RecipeInfo";

export default function Recipelist({ recipeData }){

    return (
        <div className="ListofRecipes">
            {recipeData.results.map((listofrecipe) => (
                <div>
                <button onClick={() => <Router><Routes><Route exact path="/" component={() => <RecipeInfo RecipeListID = {listofrecipe.id}/>}/></Routes></Router>}>"Bild:"<img src={listofrecipe.image} alt="listofrecipe"/> "Name:"{listofrecipe.title}</button>
                </div>
            ))}
        </div>
    );
}
