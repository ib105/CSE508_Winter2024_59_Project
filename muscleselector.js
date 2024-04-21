import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './muscleselector.css';
import ExerciseDisplay from './exercisedisplay';

const muscleOptions = [
  { id: 'abdominals', label: 'Abdominals' },
  { id: 'biceps', label: 'Biceps' },
  { id: 'calves', label: 'Calves' },
  { id: 'chest', label: 'Chest' },
  { id: 'forearms', label: 'Forearms' },
  { id: 'hamstrings', label: 'Hamstrings' },
  { id: 'lats', label: 'Lats' },
  { id: 'lower-back', label: 'Lower back' },
  { id: 'obliques', label: 'Obliques' },
  { id: 'quads', label: 'Quads' },
  { id: 'glutes', label: 'Glutes' },
  { id: 'shoulders', label: 'Shoulders' },
  { id: 'traps', label: 'Traps' },
  { id: 'triceps', label: 'Triceps' }
];

// Define your difficulty options array
const difficultyOptions = [
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' }
];

const MuscleSelector = () => {
  const [selectedMuscles, setSelectedMuscles] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedEquipment } = location.state || {};

  const toggleMuscle = (muscleId) => {
    setSelectedMuscles((prevSelected) =>
      prevSelected.includes(muscleId)
        ? prevSelected.filter((id) => id !== muscleId)
        : [...prevSelected, muscleId]
    );
  };

  const handleDifficultySelect = (difficultyId) => {
    setSelectedDifficulty(difficultyId);
  };

  const handleContinue = () => {
    console.log(selectedMuscles, selectedDifficulty);
    navigate('/exercisedisplay', { state: { selectedEquipment, selectedMuscles, selectedDifficulty } });
  };

  return (
    <div className="muscle-selector">
      <h1>Select Your Muscles</h1>
      <div className="muscle-options">
        {muscleOptions.map((muscle) => (
          <div
            key={muscle.id}
            className={`muscle-item ${selectedMuscles.includes(muscle.id) ? 'selected' : ''}`}
            onClick={() => toggleMuscle(muscle.id)}
          >
            <p>{muscle.label}</p>
          </div>
        ))}
      </div>
      
      <h2>Select Difficulty</h2>
      <div className="difficulty-options">
        {difficultyOptions.map((difficulty) => (
          <div
            key={difficulty.id}
            className={`difficulty-item ${selectedDifficulty === difficulty.id ? 'selected' : ''}`}
            onClick={() => handleDifficultySelect(difficulty.id)}
          >
            <p>{difficulty.label}</p>
          </div>
        ))}
      </div>
      
      <button className="continue-btn" onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default MuscleSelector;
