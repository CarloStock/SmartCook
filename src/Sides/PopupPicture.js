import React, {useState} from 'react'
import PopupChoose from './PopupChoose';
import "./look.css";
import { FaBackspace } from 'react-icons/fa';

export default function PopupPicture(props) {
const [buttonPopupChoose, setbuttonPopupChoose] = useState(false)

    return (props.trigger) ? (
        <div className='popuppicture'>
            <div className='popupbuttons'>
                <div className='picture'>
                    <h1>Your Ingredients</h1>
                    {props.children}
                </div>
                <button className='submitbutton' style={{color: 'white'}} onClick={() => setbuttonPopupChoose(true)}>Submit</button>
                <button className='backbutton' style={{color: 'white'}} onClick={() => props.setTrigger(false)}><FaBackspace/></button>
                <PopupChoose trigger={buttonPopupChoose} setTrigger={setbuttonPopupChoose}>
                </PopupChoose>
            </div>
        </div>
    ) : "";
}