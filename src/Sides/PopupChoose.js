import React from 'react'
import { useNavigate } from "react-router-dom";

function PopupChoose(props) {
let navigate = useNavigate();

    return (props.trigger) ? (
        <div className='popupchoose'>
            {props.children}
            <button onClick={() => {navigate("/RecipeList")}}>Submit</button>
            <button onClick={() => props.setTrigger(false)}>Go back</button>
        </div>
      ) : "";
}

export default PopupChoose