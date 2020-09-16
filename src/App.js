import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './compnents/style.css';
import {Row,Col} from 'react-bootstrap';
import Recipe from './compnents/Recipe';

function App() {
  const [search, setSearch] = useState();
  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState("chicken");
  const API_ID = "2ac462db";
  const API_KEY = "72bff833ba22ade818f2088ccc851b6a";
  // 
  useEffect(() => {
    getdata();
    setSearch('');
  }, [query]);

  const getdata = async () => {
    axios
      .get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
      .then(res => {
        console.log(res.data.hits);
        setRecipe(res.data.hits);
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={e => { e.preventDefault(); setQuery(search) }}>
        <input type="text" value={search} className="search-bar" onChange={e => {
          setSearch(e.target.value)
        }} />
        <button type="submit" className="search-btn">Srearch</button>
      </form>
        <div className="recipe">
          {
            recipe.map(recipe => (<Recipe
              label={recipe.recipe.label}
              ingredientLines={<ul>{recipe.recipe.ingredientLines.
                map(ingredient => (<li>{ingredient}</li>))}</ul>}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
            />))
          }
          </div>
        </div>
        );
      }
      
      export default App;
