import React, {useState, useEffect} from 'react'
import PopupPicture from './PopupPicture'
import { useNavigate } from "react-router-dom";

export default function Main() {
  const [buttonPopupPicture, setbuttonPopupPicture] = useState(false);
  const [image, setImage] = useState(null);

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
      <SearchRecipe data={getData()}/>
      <input type="file" onChange={handleChange} />
      <button onClick={() => checkimage()}> Upload Picture</button>
      <PopupPicture trigger={buttonPopupPicture} setTrigger={setbuttonPopupPicture}>
        <h1>Your Picture</h1>
        {image && <img src={image} alt="Uploaded" />}
      </PopupPicture>
      {/*{<GetRecipeRandomData/>}*/}
    </div>
  )
}


{/*export function GetRecipeRandomData(){
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
  <div>
      {recipeRandomData && recipeRandomData.recipes.map((listofrecipe) => (
      <div key={listofrecipe.id}>
      <button onClick={() => {navigate("/RecipeInfo/" + listofrecipe.id)}}>"Picture:"<img src={listofrecipe.image} alt="listofrecipe"/> "Name:"{listofrecipe.title}</button>
      </div>
  ))}
  </div>)
}
*/}

export function SearchRecipe({ searchrecipeData }){
  let navigate = useNavigate();
  const [filterData, setfilterData] = useState([]);
  const handleFilter = (event) => {
    const searchinput = event.target.value
    const newFilter = searchrecipeData.filter((value) => {
        return  value.title.toLowerCase().include(searchinput.toLowerCase());
    });
    setfilterData(newFilter);
  };

  return (
    <div>
      <div>
        <input type="text" placeholder='Search for Recipe...' onChange={handleFilter}/>
      {filterData.length !== 0 && (
        <div>
        {filterData && filterData.results.slice(0, 15).map((listofrecipe) => {
        return  (
          <button onClick={() => {navigate("/RecipeInfo/" + listofrecipe.id)}}>{listofrecipe.title}</button>
          );
        })}
        </div>
    )}
      </div>     
    </div>)
}

export function getData() {
  const [searchrecipeData, setsearchRecipeData] = useState(null);

  useEffect(()=> {
    fetch(`https://api.spoonacular.com/recipes/random?apiKey=277620b9d50e4ea4bc123f52c019e394&number=2`)
    .then((response) => response.json())
    .then((data) => {
    setsearchRecipeData(data);
    console.log(data);
    })
    .catch((err) => console.error(err));
}, []);

return(
  <div>{searchrecipeData && searchrecipeData}</div>
);
}

