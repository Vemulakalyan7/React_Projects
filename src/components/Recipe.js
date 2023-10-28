import React, { useEffect } from "react"
import { useState } from "react"
import "../App.css"
import RecipeItem from "./RecipeItem"
import RecipeIndex from "./RecipeIndex"


function Recipe(){
    const [url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=b")
    const [item,setItem]=useState("")
    const [show,setShow]=useState(false)
    const [search,setSearch]=useState("")
    useEffect(()=>{
  fetch(url).then((res)=>{
   return res.json()
  }).then((data)=>{
    console. log(data.meals)
    setItem(data.meals)
    setShow(true)
  })
    },[url])

    function setIndex(alpha){
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);

    }
    function searchRecipe(e){
        if(e.key==="Enter"){
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}
            `)
        }else{

        }
    }
  
    return(
<div className="Main">
    <div className="heading">
    <h1>Search Your Food Recipe</h1>
    </div>
     
    <div class="search-bar">
  <input type="text" class="search-box" placeholder=""
   aria-label="Username" aria-describedby="addon-wrapping"
   onChange={(e)=>setSearch(e.target.value)} onKeyDown={searchRecipe}/>
</div>

<div className="container" >
    {
        show?<RecipeItem data={item}    />: <h3>Not found</h3>
    }
     </div>
<div>
    <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)} />

</div>
</div>
    )
}
export default Recipe