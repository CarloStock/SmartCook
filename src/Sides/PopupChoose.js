import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { setGlobalState, useGlobalState } from "../state";
import { FaBackspace } from 'react-icons/fa';
import { BsFillTrashFill } from "react-icons/bs";

function PopupChoose(props) {
    let navigate = useNavigate();
    const [diet] = useGlobalState("diet");
    const [intolerances] = useGlobalState("intolerance");
    const [ingredients] = useGlobalState("ingredients");

    const handleChangeDiet = (data) =>{
        if (diet.indexOf(data) === -1){
            setGlobalState("diet", currentData => [...currentData, data])
        }
        else {
            const newdiet = diet.filter((diets) => diets !== data);
            setGlobalState("diet", newdiet)
        }
    }

    const handleChangeIntolerances = (data) =>{
        if (intolerances.indexOf(data) === -1){
            setGlobalState("intolerance", currentData => [...currentData, data])
        }
        else {
            const newdiet = intolerances.filter((intolerance) => intolerance !== data);
            setGlobalState("intolerance", newdiet)
        }
    }

    const handleIngredient = (data) => {
        const newingredient = ingredients.filter((ingredient) => ingredient !== data);
        setGlobalState("ingredients", newingredient)
    }

    const handlehistory = () => {
        setGlobalState("diet", [])
        setGlobalState("intolerance", [])
        props.setTrigger(false)
      }

    return (props.trigger) ? (
        <div className='popupchoose'>
            <div className='popupmain'>   
                <button className='backbutton' style={{color: 'white'}} onClick={() => handlehistory()}><FaBackspace/></button>    
                <br/>
                <br/>  
                Are you on a diet? <br/>
                <input type="checkbox" onChange={() => handleChangeDiet("vegetarien")}/> vegetarien <br/>
                <input type="checkbox" onChange={() => handleChangeDiet("vegan")}/> vegan <br/>
                <input type="checkbox" onChange={() => handleChangeDiet("gluten free")}/> gluten free <br/>
                <input type="checkbox" onChange={() => handleChangeDiet("pescetarian")}/> pescetarian <br/>
                <br/>
                Do you have any intolerances? <br/>
                <input type="checkbox" onChange={() => handleChangeIntolerances("dairy")}/> dairy intolerance <br/>
                <input type="checkbox" onChange={() => handleChangeIntolerances("peanut")}/> peanut intolerance <br/>
                <input type="checkbox" onChange={() => handleChangeIntolerances("soy")}/> soy intolerance <br/>
                <input type="checkbox" onChange={() => handleChangeIntolerances("grain")}/> grain intolerance <br/>
                <h4>These are the ingredients we found: </h4>
                    <br/>
                    Did we find any ingredients that you don't have?
                    {ingredients && ingredients.map((ing) => (
                        <div>
                            {ing}
                            &nbsp; &nbsp;
                            <button className='deletebutton' style={{color: 'white'}} onClick={() => {handleIngredient(ing)}}><BsFillTrashFill/></button>
                        </div>
                    ))}
                    <br/>
                    <br/>
                    Did we miss any ingredients?
                    <SearchIngredient />
            </div>
            <button className='submitbutton' style={{color: 'white'}} onClick={() => {navigate("/RecipeList")}}>Submit</button>
        </div>
      ) : "";
}

export default PopupChoose

export function SearchIngredient(){
    const [searchIngredients, setsearchIngredients] = useState([]);
    const [ingredients] = useGlobalState("ingredients");

    const handleAddIngredient = (data) => {
        setsearchIngredients([]);
        if (ingredients.indexOf(data) === -1){
        setGlobalState("ingredients", currentData => [...currentData, data])}
    }
  
    const handleSubmit = async (event) => {
    const searchIngredient = event.target.value;
    if (searchIngredient === "") {
        setsearchIngredients([]);
    }
    else {
      fetch(`https://api.spoonacular.com/food/ingredients/search?apiKey=277620b9d50e4ea4bc123f52c019e394&query=${searchIngredient}&number=2`)
      .then((response) => response.json())
      .then((data) => {
      setsearchIngredients(data.results);
      })
      .catch((err) => console.error(err));
    }
    };
    

    return (
        <div>
            <input type="text" onChange={handleSubmit}></input>
            {searchIngredients && searchIngredients.length !== 0 && (
                <div className='results'>
                {searchIngredients && searchIngredients.map((result) => (
                    <button className='buttonresult' onClick={() => {handleAddIngredient(result.name)}}>{result.name}</button>   
                ))}
                </div>
            )}
        </div>
    );
};