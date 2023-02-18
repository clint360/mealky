import './App.css';
import { useState, useEffect } from 'react';
import Face from './App/Face.js';
import { Provider } from './Hooks/Context';

function App() {
  const [myRecipes, setMyRecipes] = useState([{name: 'Corn Fufu', image: '', lm: '12/30/20', content: '' }])
  const [randchange, setrandchange] = useState('.');
  const [recipeOnView, setRecipeOnView] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ activity, setActivity ] = useState([])

  useEffect(() => {
    const myRecipes = JSON.parse(localStorage.getItem('myRecipes'));
    if (myRecipes) {
     setMyRecipes(myRecipes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myRecipes', JSON.stringify(myRecipes));
  }, [myRecipes, randchange]);

  return (
    <Provider value={{myRecipes, setMyRecipes, randchange, setrandchange, currentIndex, setCurrentIndex, activity, setActivity, recipeOnView, setRecipeOnView}} >
    <div className="App">
    <Face />
    </div>
    </Provider>
  );
}

export default App;
