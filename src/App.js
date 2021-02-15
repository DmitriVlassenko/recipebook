import './App.css';
import { useState, useEffect } from "react";
import Recipe from "./recipe";

const App = () => {

  const APP_ID = "0ddba6fe";
  const APP_KEY = "64243d24142fd0d013c8f82f45fd99b8";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
      getRecipes();
  }, [query]);

  const getRecipes = async () => {
      const responce = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=100`);
      const data = await responce.json();
      setRecipes(data.hits);
      console.log(data.hits);
  }

  const updateSearch = e => {
      setSearch(e.target.value);
  }

  let i = 0;

  const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
  }

  return(
      <div className={"App"}>
        <form onSubmit={getSearch} className={"search-form"}>
          <input placeholder={"Search by ingredient"} className={"search-bar"} type="text" value={search} onChange={updateSearch}/>
          <button className={"search-button"} type={"submit"}>Search</button>
        </form>
          <div className={"recipes"}>
          {recipes.map(recipe => (
              <Recipe
                  key={i++}
                  title={recipe.recipe.label}
                  link={recipe.recipe.url}
                  image={recipe.recipe.image}
                  recipe={recipe.recipe.url}
              />
          ))}
          </div>
      </div>
  );
}

export default App;
