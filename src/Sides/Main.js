import React, {useState, useEffect} from 'react'
import PopupPicture from './PopupPicture'
import { useNavigate } from "react-router-dom";
import { setGlobalState } from "../state";
import './look.css';

export default function Main() {
  const [buttonPopupPicture, setbuttonPopupPicture] = useState(false);
  const [image, setImage] = useState(null);
  const ingredients  = ["lettuce"]

  function checkimage() {
    if (image != null) 
      setbuttonPopupPicture(true);
  }

  const handleChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className='main'>
      <SearchRecipe />
      <div className='picupload'>
        <input type="file" onChange={handleChange} accept="image/png, image/jpeg"/>
        <button onClick={() => checkimage()}> Upload Picture</button>
      </div>
        {<GetRecipeRandomData/>}
      <PopupPicture trigger={buttonPopupPicture} setTrigger={setbuttonPopupPicture}>
        {image && <img src={image} alt="Uploaded" width={250} height={250}/>}
        {setGlobalState("ingredients", ingredients)}
      </PopupPicture>
    </div>
  )
}


export function GetRecipeRandomData(){
  const [recipeRandomData, setRecipeRandomData] = useState(null);
  let navigate = useNavigate();
    
  useEffect(()=> {
      fetch(`https://api.spoonacular.com/recipes/random?apiKey=277620b9d50e4ea4bc123f52c019e394&number=2`)
      .then((response) => response.json())
      .then((data) => {
      setRecipeRandomData(data);
      console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='randomrecipe'>
        {recipeRandomData && recipeRandomData.recipes.map((listofrecipe) => (
        <div key={listofrecipe.id}>
        <button className='randombutton' onClick={() => {navigate("/RecipeInfo/" + listofrecipe.id)}}>
          <img src={listofrecipe.image} 
          alt="Image not found"
          onError={event => {
            event.target.src="../images/3253638.png"
            event.onerror = null }} width={500} height={340}/>
          <br/>
          {listofrecipe.title}
        </button>
        </div>
    ))}
    </div>
  )
}

export function SearchRecipe(){
  const [searchrecipeData, setsearchRecipeData] = useState([]);
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    const searchRecipe = event.target.value;
    if (searchRecipe === "") {
      setsearchRecipeData([]);
    }
    else {
      fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=277620b9d50e4ea4bc123f52c019e394&number=2&query=${searchRecipe}`)
      .then((response) => response.json())
      .then((data) => {
      setsearchRecipeData(data.results);
      })
      .catch((err) => console.error(err));
    }
    };

  return (
    <div className='search'>
      <h1>Smart Cook</h1>
      <input className='searchbar' type="text" onChange={handleSubmit} placeholder="search Recipe..."/>
      {searchrecipeData && searchrecipeData.length !== 0 && (
        <div className='results'>
            {searchrecipeData && searchrecipeData.map((result) => (
              <button className='buttonresult' onClick={() => {navigate("/RecipeInfo/" + result.id)}}>{result.title}</button>
            ))}
        </div>
      )}
    </div>
    );
};