import React, { useContext, useRef, useState } from 'react';
import { Context } from '../../Hooks/Context';
import './EditUI.css';


function EditUI({close}) {
  const { userDetails, setUserDetails } = useContext(Context)
  const  fullnameRef  = useRef(null)
  const  phoneRef  = useRef(null)
  const  emailRef  = useRef(null) 
  const  imageRef  = useRef(null)
  const [image, setImage] = useState('');
  const [imageURL, setImageURL] = useState('') 

  const handlePhotoUpload = (e) => {
    e.preventDefault()
    if (e.target.foodimage.files[0]) {
       setImage(e.target.userimage.files[0]);
       console.log(image);
        
  const fr = new FileReader(); // Creates new FileReader object
  fr.readAsDataURL(image);
  fr.addEventListener('load', () => {    // Waits for file reading to be complete
    const url = fr.result  
    setImageURL(`${url}`)// Make URL src of image and append to DO
})
    }
  }


  return (
    <div className='euif'>
      <div><button onClick={()=>{close()}}>CLOSE</button></div>
      {/* <form  onSubmit={handlePhotoUpload}><strong>Picture:</strong> <input className='uploadfile' type='file' accept="image/*" name='foodimage'/><button type='submit'>Upload</button> <br />
      </form>  
      Preview: <img className='hey' src={imageURL} alt='Your Image' />
      <br/> */}
     Profile Image URL: <input ref={imageRef} type='text' />
      <br />
      FULL NAME: <input ref={fullnameRef} type='text' />
      <br />
      PHONE: <input ref={phoneRef} type='text' />
      <br />
      EMAIL: <input ref={emailRef} type='email' />
      <br /> 
      <button onClick={()=>{
        setUserDetails({
            img: imageRef.current.value,
            name: fullnameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value
        }); console.log(userDetails); close();
      }}>SAVE</button>
    </div>
  )
}

export default EditUI
