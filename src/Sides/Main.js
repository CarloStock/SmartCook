import React, {useState} from 'react'
import PopupPicture from './PopupPicture'
import GetRecipeRandomData from '../Functions';

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
      <input type="file" onChange={handleChange} />
      <button onClick={() => checkimage()}> Upload Picture</button>
      <PopupPicture trigger={buttonPopupPicture} setTrigger={setbuttonPopupPicture}>
        <h1>Your Picture</h1>
        {image && <img src={image} alt="Uploaded" />}
      </PopupPicture>
      {<GetRecipeRandomData/>}
    </div>
  )
}
