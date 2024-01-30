import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

//https://api.edamam.com/api/recipes/v2?type=public&q=lemon&app_id=861ce5b4&app_key=c03c4c5efc2ca0538547db72ad701e3d


function App(){
const ID="861ce5b4";
const KEY="c03c4c5efc2ca0538547db72ad701e3d";

const [ mySearch,setMySearch]=useState("");
const [myRecipes,setMyRecipes]=useState([]);
const[wordSubmitted,setWordSubmitted]=useState("avocado");


useEffect(() => {
  const getRecipe=async ()=> {
    const response=await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=861ce5b4&app_key=c03c4c5efc2ca0538547db72ad701e3d');
    const data=await response.json();
    console.log(data.hits);
   setMyRecipes(data.hits);
    
  }
  getRecipe()
},[wordSubmitted])
const myRecipeSearch=(e)=>{
  console.log(e.target.value)
  setMySearch(e.target.value)
}

const finalSearch=(e)=>{
  e.preventDefault()
  setWordSubmitted(mySearch)
}
return(
  <div className="App">

  <div className="container">
  <video autoPlay muted loop>
   <source src={video} type="video/mp4" />
</video>
  <h1>Find a Recipe</h1>
  </div>

  <div className='container'>
     <form onSubmit={finalSearch}>
         <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}/>
    </form>
</div>

<div className='container'>
     <button>
         <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
      </button>
</div>

{myRecipes.map(element=>(
  <MyRecipesComponent 
  label={element.recipe.label}
  image={element.recipe.image}
  calories={element.recipe.calories}
  ingredients={element.recipe.ingredientLines}
  />

))}
</div>
 
)
}

export default App;
