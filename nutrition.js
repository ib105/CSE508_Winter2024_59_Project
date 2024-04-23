import React, { useState } from 'react';
import './nutrition.css';

const Nutrition = () => {
  const [dietType, setDietType] = useState('');
  
  const [region, setRegion] = useState(new Set());
  const [macros, setMacros] = useState({
    carbohydrates: '',
    energy: '',
    protein: '',
    fats: ''
  });
  const dietPreferences = [
    { name: 'Vegan', image: '/vegan.jpg' },
    { name: 'Pescetarian', image: '/pescetarian.jpg' },
    { name: 'Lacto', image: '/lacto-vegetarian.jpg' },
    { name: 'Vegetarian', image: '/non-vegetarian.jpg' }
  ];

  const toggleRegion = (regionOption) => {
    const newRegion = new Set(region);
    if (newRegion.has(regionOption)) {
      newRegion.delete(regionOption);
    } else {
      newRegion.add(regionOption);
    }
    setRegion(newRegion);
  };
  const toggleDietType = (selectedDiet) => {
    setDietType((currentDietTypes) => {
      if (currentDietTypes.includes(selectedDiet)) {
        return currentDietTypes.filter((diet) => diet !== selectedDiet);
      } else {
        return [...currentDietTypes, selectedDiet];
      }
    });
  };
  

  const selectAllRegions = (allRegions) => {
    if (region.size === allRegions.length) {
      setRegion(new Set());
    } else {
      setRegion(new Set(allRegions));
    }
  };

  const handleMacroChange = (e) => {
    setMacros({ ...macros, [e.target.name]: e.target.value });
  };

  // Just a placeholder function for now
  const handleContinue = () => {
    // Log the selected diet preferences, regions, and macros
  console.log('Selected Diet Types:', [...dietType]);
  console.log('Selected Regions:', [...region]);
  console.log('Macros:', macros);

  alert('Continue with selected options!');
  };

  const regions = ['Mexican', 'Greek', 'Northern Africa', 'Thai', 'Italian', 'Eastern European', 'Chinese and Mongolian', 'US', 'UK', 'Japanese', 'Caribbean', 'Deutschland', 'Irish'];

  return (
    <div className="nutrition-container">
      {/* ... */}
      <div className="section">
        <h2>Select Your Diet Preference</h2>
        <div className="toggle-buttons">
        {dietPreferences.map((diet) => (
            <button
            key={diet.name}
            className={`toggle-button ${dietType.includes(diet.name) ? 'active' : ''}`}
            onClick={() => toggleDietType(diet.name)}
            >
            <img src={process.env.PUBLIC_URL + diet.image} alt={diet.name} className="diet-image" />
            {diet.name}
            </button>
        ))}
</div>

      </div>

      <div className="section">
        <h2>Select Your Region</h2>
        <div className="toggle-buttons">
          {regions.map((regionOption) => (
            <button
              key={regionOption}
              className={`toggle-button ${region.has(regionOption) ? 'active' : ''}`}
              onClick={() => toggleRegion(regionOption)}
            >
              {regionOption}
            </button>
          ))}
          <button
            className={`toggle-button ${region.size === regions.length ? 'active' : ''}`}
            onClick={() => selectAllRegions(regions)}
          >
            All
          </button>
        </div>
      </div>

      <div className="section macro-inputs">
        <input
          type="number"
          name="carbohydrates"
          placeholder="Max Carbohydrates (g)"
          value={macros.carbohydrates}
          onChange={handleMacroChange}
        />
        <input
          type="number"
          name="energy"
          placeholder="Max Calories (kcal)"
          value={macros.energy}
          onChange={handleMacroChange}
        />
        <input
          type="number"
          name="protein"
          placeholder="Max Protein (g)"
          value={macros.protein}
          onChange={handleMacroChange}
        />
        <input
          type="number"
          name="fats"
          placeholder="Max Fats (g)"
          value={macros.fats}
          onChange={handleMacroChange}
        />
      </div>

      <div className="continue-button-container">
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Nutrition;
