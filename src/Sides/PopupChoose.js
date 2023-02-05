import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

function PopupChoose(props) {
let navigate = useNavigate();
const [diet, setDiet] = useState([])

handleDiets = (event) => {
    if (event.target.checked) {
      if (!diet.includes(event.target.value)) {
        setDiet({ diet: [...diet, event.target.value]})
      }
    } else {
      setDiet({ diet: diet.filter(value => value !== event.target.value) });
    }
  }

    return (props.trigger) ? (
        <div className='popupchoose'>
            {props.children}
            <input onChange={handleDiets} type="checkbox" name='diet' value="vegetarien"/>vegetarien<br/>
            <input onChange={handleDiets} type="checkbox" name='diet' value="vegan"/>vegan<br/>
            <input onChange={handleDiets} type="checkbox" name='diet' value="vegetarien"/>pescotarien<br/>
            <button onClick={() => {navigate("/RecipeList")}}>Submit</button>
            <button onClick={() => props.setTrigger(false)}>Go back</button>
        </div>
      ) : "";
}

export default PopupChoose
