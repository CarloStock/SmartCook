import React, {useState} from 'react'
import PopupChoose from './PopupChoose';

export default function PopupPicture(props) {
const [buttonPopupChoose, setbuttonPopupChoose] = useState(false)

    return (props.trigger) ? (
        <div className='popuppicture'>
            {props.children}
            <button onClick={() => setbuttonPopupChoose(true)}>Submit</button>
            <button onClick={() => props.setTrigger(false)}>Go back</button>
            <PopupChoose trigger={buttonPopupChoose} setTrigger={setbuttonPopupChoose}>
                <h1>Your Choose</h1>
            </PopupChoose>
        </div>
    ) : "";
}