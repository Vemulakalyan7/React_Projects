import "../App.css";
import { useNavigate } from "react-router-dom";
function RecipeItem({data}) {
  let navigate=useNavigate()
  console.log(data);

  return (
    <div className="container-items">
      {!data ?"Not found"  : (
        data.map((item) => (
          <div className="card" onClick={()=>navigate(`/${item.idMeal}`)} >
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h2>{item.strMeal}</h2>
          </div>
        ))
      ) }
    </div>
  );
}

export default RecipeItem;
