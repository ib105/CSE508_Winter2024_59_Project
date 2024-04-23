import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './exercisedisplay.css';

const ExerciseDisplay = () => {
  const location = useLocation();
  const { selectedEquipment, selectedMuscles, selectedDifficulty } = location.state || { selectedEquipment: [], selectedMuscles: [], selectedDifficulty: '' };

  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch('exercises3.json');
        console.log(response); // This will log the response or any network errors.
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);  // Add this to log the actual fetched data
        setExercises(data);

      } catch (err) {
        console.error('Error fetching exercises data:', err);
        setError(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
  
    fetchExercises();
  }, []);
  

  

  const filteredExercises = exercises.filter(exercise => {
    // Make sure to compare in a case-insensitive manner if needed
    const equipmentMatch = selectedEquipment?.some(equip => 
      exercise.equipment?.map(e => e.toLowerCase()).includes(equip.toLowerCase())
    );
    const muscleMatch = selectedMuscles?.some(muscle => 
      exercise.targets?.map(t => t.toLowerCase()).includes(muscle.toLowerCase())
    );
    // Compare difficulties in a case-insensitive manner
    const difficultyMatch = exercise.difficulty?.toLowerCase() === selectedDifficulty?.toLowerCase();
  
    return equipmentMatch && muscleMatch && difficultyMatch;
  });
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="exercise-display">
      {filteredExercises.length > 0 ? (
        <ul>
          {filteredExercises.map((exercise) => (
            <li key={exercise._id}>
              <h3>{exercise.title}</h3>
              <p>Difficulty: {exercise.difficulty}</p>
              <p>Equipment: {exercise.equipment.join(', ')}</p>
              <p>Targets: {exercise.targets.join(', ')}</p>
              <ol>{exercise.steps.map((step, index) => <li key={index}>{step}</li>)}</ol>
              {exercise.videos?.map((video, index) => (
                <video key={index} controls src={video} />
              ))}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-exercises">No exercises match your criteria.</p>
      )}
    </div>
  );
};

export default ExerciseDisplay;
