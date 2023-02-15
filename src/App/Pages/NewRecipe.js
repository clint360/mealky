import React, { useState, useEffect, useRef } from 'react';
import './NewRecipe.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function NewRecipe() {
    const [value, setValue] = useState('');
    const [image, setImage] = useState(null)
    const imageRef = useRef(null);
    
    const handleChange = () => {
        setImage(`${imageRef.current.value}`)
        console.log(`${imageRef.current.value}`);
    }
    
  useEffect(()=>{
    console.log(typeof(value));
  },[value])
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ['bold', 'underline', 'italic', 'blockquote', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ["link", "image", "video", "pdf"]
    ]
  }
  return (
    <div className='newrecipepage'>
        <section id='headersection'>
        <p>NEW RECIPE</p>
        <button className='new'>Back </button>
        </section>
        <section id='details'>
          <div className='detdiv'>
            <strong>Recipe Name:</strong> <input type='text' /> <br />
            <strong>Origin:</strong> <input type='text' /> <br />
            <strong>Picture:</strong> <input type='file' className='uploadfile' accept="image/*" ref={imageRef} onChange={handleChange}/> <br />
            </div>
            <br />
            <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className='editor-input'
            modules={modules}
            spellcheck="true"
            placeholder='Write in your recipe here'
          /><br />
          <button className='new' style={{marginLeft: "0px", marginTop: '20px'}}>Save Recipe</button>
        </section>
       
    </div>
  )
}

export default NewRecipe
