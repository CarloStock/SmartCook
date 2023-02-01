import React from 'react'
import { GetRecipeData } from '../Functions';


export default function RecipeList() {

  return (
    <div className="recipelist">
        {<GetRecipeData/>}
    </div>
);
}
