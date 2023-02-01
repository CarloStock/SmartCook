import React from "react";
import { GetRecipeInfo } from '../Functions';

export default function RecipeInfo() {
  return (
    <div className='recipeinfo'>
      {<GetRecipeInfo />}
    </div>
  )
}
