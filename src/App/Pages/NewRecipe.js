import React, { useState, useEffect, useRef, useContext } from 'react';
import './NewRecipe.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Context } from '../../Hooks/Context';



function NewRecipe() {
  const d = new Date()
  const datemodified = d.toDateString();
  var time = d.getHours() + ":" + d.getMinutes();
  const { myRecipes, setMyRecipes, setActivity } = useContext(Context);
  const recipenameRef = useRef(null);
  const [value, setValue] = useState('');
  const [recipename, setRecipename] = useState('No name');
  const [image, setImage] = useState(null)
  const [imageURL, setImageURL] = useState('')

  const handleImageUpload = (e) => {
    e.preventDefault()
    if (e.target.foodimage.files[0]) {
      setImage(e.target.foodimage.files[0]);
      console.log(image);

      const fr = new FileReader(); // Creates new FileReader object
      fr.readAsDataURL(image);
      fr.addEventListener('load', () => {    // Waits for file reading to be complete
        const url = fr.result
        setImageURL(`${url}`)// Make URL src of image and append to DO
      })
    }
  }

  const handleChange = () => {
    setRecipename(recipenameRef.current.value)
  }

  useEffect(() => {
    setValue(value);
  }, [value])

  const saveNewRecipe = () => {
    const newrecipeObj = {
      name: recipename,
      image: imageURL,
      lm: `${datemodified} , ${time}`,
      content: value,
      favorite: false,
    }
    setMyRecipes((prev) => [...prev, newrecipeObj]);
    console.log(myRecipes);
  }


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
        <button className='new' onClick={() => { window.history.back() }}>Back </button>
      </section>
      <section id='details'>
        <div className='detdiv'>
          <strong>Recipe Name:</strong> <input onChange={handleChange} ref={recipenameRef} type='text' required /> <br />
          <form onSubmit={handleImageUpload}><strong>Picture:</strong> <input className='uploadfile' type='file' accept="image/*" name='foodimage' /><button type='submit'>Upload</button> <br /></form>
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
        <button className='new' style={{ marginLeft: "0px", marginTop: '100px' }} onClick={() => { saveNewRecipe(); window.history.back(); setActivity((prev) => [...prev, { activity: `Created the ${recipename} recipe`, time: `${datemodified} , ${time}` }]) }}>Save Recipe</button>
      </section>

    </div>
  )
}

export default NewRecipe
