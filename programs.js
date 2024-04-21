import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EquipmentSelector.css';

const EquipmentSelector = () => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const navigate = useNavigate();

  const toggleEquipment = (equipment) => {
    setSelectedEquipment((prevSelected) =>
      prevSelected.includes(equipment)
        ? prevSelected.filter((e) => e !== equipment)
        : [...prevSelected, equipment]
    );
  };

  const handleContinue = () => {
    console.log(selectedEquipment);
    // TODO: Save the selected equipment to the backend or local state
    // Navigate to the muscle selection page
    navigate('/muscleselector', { state: { selectedEquipment } }); 
  };

  return (
    <div className="equipment-selector">
      <h1>Select Your Equipment</h1>
      <div className="equipment-options">
        {equipmentOptions.map((equipment) => (
          <div
            key={equipment.id}
            className={`equipment-item ${selectedEquipment.includes(equipment.id) ? 'selected' : ''}`}
            onClick={() => toggleEquipment(equipment.id)}
          >
            <img src={`/${equipment.id}.jpeg`} alt={equipment.label} />
            <p>{equipment.label}</p>
          </div>
        ))}
      </div>
      <button className="continue-btn" onClick={handleContinue}>Continue</button>
    </div>
  );
};

// Equipment options moved inside Programs to keep related code together
const equipmentOptions = [
  { id: 'bodyweight', label: 'Bodyweight' },
  { id: 'dumbbell', label: 'Dumbbell' },
  { id: 'barbell', label: 'Barbell' },
  { id: 'kettlebell', label: 'Kettlebell' },
  { id: 'band', label: 'Band' },
  { id: 'plate', label: 'Plate' },
  { id: 'pull-up-bar', label: 'Pull Up Bar' },
  { id: 'bench', label: 'Bench' },
];

function Programs() {
  return (
    <div>
      {/* Possibly other content related to programs */}
      <EquipmentSelector />
    </div>
  );
}

export default Programs;
