import './App.css';
import Recipe from './components/Recipe';

import { Routes,Route } from 'react-router-dom';
import RecipeInfo from './components/RecipeInfo';
function App() {
  return (
    <div  className='App'>
      <Routes>
        <Route path="/" element={<Recipe/>}></Route>
        <Route path="/:mealId" element={<RecipeInfo/>}></Route>
      </Routes>
      
     
     
      
    </div>
  );
}

export default App;
