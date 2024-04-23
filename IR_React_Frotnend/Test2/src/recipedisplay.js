import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import recipesData from './nutrition.json'; // Adjust the path accordingly
import './recipedisplay.css';

const RecipeDisplay = () => {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const location = useLocation();
  const { dietType, region, macros } = location.state || { dietType: [], region: [], macros: {} };

  useEffect(() => {
    const freedom = {
      carbohydrates: 30, // 30g freedom for carbohydrates
      energy: 100, // 100kcal freedom for energy
      protein: 10, // 10g freedom for protein
      fats: 20 // 20g freedom for fats
    };

    const filtered = recipesData.filter((recipe) => {
      const fitsMacros = Object.entries(macros).every(([key, value]) => {
        if (value) {
          const recipeValue = recipe[key.charAt(0).toUpperCase() + key.slice(1)]; // Convert key to match JSON keys
          return (
            recipeValue >= value - freedom[key] &&
            recipeValue <= value + freedom[key]
          );
        }
        return true;
      });

      const fitsDiet = dietType.length === 0 || dietType.some(diet => recipe[diet.toLowerCase()]);
      const fitsRegion = region.length === 0 || region.includes(recipe.Region);

      return fitsMacros && fitsDiet && fitsRegion;
    });

    setFilteredRecipes(filtered);
  }, [dietType, region, macros]);

  return (
    <div className="recipe-container">
      <h2>Recipes:</h2>
      {filteredRecipes.length > 0 ? (
        <ul className="recipe-list">
          {filteredRecipes.map((recipe, index) => (
            <li key={index} className="recipe-item">
              <h3>{recipe.Recipe_title}</h3>
              <p><strong>Region:</strong> {recipe.Region}</p>
              <p><strong>Diet:</strong> {Object.entries(recipe).filter(([key, value]) => ['vegan', 'pescetarian', 'lacto_vegetarian', 'non_vegetarian'].includes(key) && value).map(([key]) => key).join(', ')}</p>
              <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-recipes">No recipes found based on the selected criteria.</p>
      )}
    </div>
  );
};

export default RecipeDisplay;
