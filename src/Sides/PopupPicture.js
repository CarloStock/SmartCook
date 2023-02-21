import React, {useState} from 'react'
import PopupChoose from './PopupChoose';
import "./look.css";

export default function PopupPicture(props) {
const [buttonPopupChoose, setbuttonPopupChoose] = useState(false)

    return (props.trigger) ? (
        <div className='popuppicture'>
            <div className='popupbuttons'>
                <div className='picture'>
                    <h1>Your Picture</h1>
                    {props.children}
                </div>
                <button className='subbutton' onClick={() => setbuttonPopupChoose(true)}>Submit</button>
                <button className='backbutoon' onClick={() => props.setTrigger(false)}>Go back</button>
                <PopupChoose trigger={buttonPopupChoose} setTrigger={setbuttonPopupChoose}>
                </PopupChoose>
            </div>
        </div>
    ) : "";
}