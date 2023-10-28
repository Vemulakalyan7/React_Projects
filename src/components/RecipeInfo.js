import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
function RecipeInfo() {
  let vId="";
  const { mealId } = useParams();
  const [item,setItem]=useState()

  if(mealId!=""){
    {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}
      `).then((res)=>{
        return res.json()
      }).then((data)=>{
        if (data.meals && data.meals.length > 0) {
          setItem(data.meals[0]);
          
        } else {
          setItem({});
        }
      })
    }
  }
if(item){
  const url=item.strYoutube
  const str=url.split("=")
  vId=str[str.length-1]
  
}
  return (
    <div >
      <div className="GoTOHome">
        <Link to='/'><h2>Home</h2></Link>
      </div>
{
  (!item)?"":(
  <div className="content">
    <img src={item.strMealThumb} alt={item.strMeal} />
            <div className="inner-content">
              <h2>{item.strMeal} </h2>
              <h2>{item.strArea} Food</h2>
              <h2>Category {item.strCategory} </h2>
      </div>
      <div className="recipe-details">
      <div className="ingredient">
        <h1>Ingredient</h1>
        <h4>{item.strIngredient1}:{item.strMeasure1}</h4>
        <h4>{item.strIngredient2}:{item.strMeasure2}</h4>
        <h4>{item.strIngredient3}:{item.strMeasure3}</h4>
        <h4>{item.strIngredient4}:{item.strMeasure4}</h4>
        <h4>{item.strIngredient5}:{item.strMeasure5}</h4>
        <h4>{item.strIngredient6}:{item.strMeasure6}</h4>
        <h4>{item.strIngredient7}:{item.strMeasure7}</h4>
        <h4>{item.strIngredient8}:{item.strMeasure8}</h4>
        <h4>{item.strIngredient9}:{item.strMeasure9}</h4>
      </div>  
      <div className="instructions">
        <h1>Instructions</h1>
       <h4>{item.strInstructions}</h4>
        </div>
</div>
<div className="video">
<iframe src={`https://www.youtube.com/embed/${vId}`}></iframe>

  </div>
  </div>
  )
}
    </div>
  );
}

export default RecipeInfo;
