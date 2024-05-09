// Dropdown.js
import React, { useState } from 'react';

const Dropdown = ({ onChange }) => {
  const options = [
    {
      label: 'Technical',
      value: 'Technical',
      subOptions: [
        { label: 'Java', value: 'Java' },
        { label: 'Python', value: 'Python' },
        { label: 'AWS', value: 'AWS' },
        { label: 'SQL', value: 'SQL' },
      ],
    },
    {
      label: 'Professional',
      value: 'Professional',
      subOptions: [
        { label: 'Yoga', value: 'Yoga' },
        { label: 'Music', value: 'Music' },
        { label: 'Fitness', value: 'Fitness' },
        { label: 'Cooking', value: 'Cooking' },
      ],
    },
    {
      label: 'Academic',
      value: 'Academic',
      subOptions: [
        { label: 'School', value: 'School' },
        { label: 'College', value: 'College' },
      ],
    },
  ];

  const [selectedMainOption, setSelectedMainOption] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');

  const handleMainOptionChange = (event) => {
    const selectedMainOptionValue = event.target.value;
    setSelectedMainOption(selectedMainOptionValue);
    setSelectedSubOption('');

    // Call the parent component's onChange prop with selected values
    onChange(selectedMainOptionValue, '');
  };

  const handleSubOptionChange = (event) => {
    const selectedSubOptionValue = event.target.value;
    setSelectedSubOption(selectedSubOptionValue);

    // Call the parent component's onChange prop with selected values
    onChange(selectedMainOption, selectedSubOptionValue);
  };

  return (
    <div>
      <label htmlFor="mainDropdown">Select an option:</label>
      <select
        id="mainDropdown"
        value={selectedMainOption}
        onChange={handleMainOptionChange}
      >
        <option value="">-- Select --</option>
        {options.map((mainOption) => (
          <option key={mainOption.value} value={mainOption.value}>
            {mainOption.label}
          </option>
        ))}
      </select>

      {selectedMainOption && (
        <div className="sub-dropdown-container">
          <label htmlFor="subDropdown">Select a sub-option:</label>
          <select
            id="subDropdown"
            value={selectedSubOption}
            onChange={handleSubOptionChange}
          >
            <option value="">-- Select --</option>
            {options
              .find((mainOption) => mainOption.value === selectedMainOption)
              ?.subOptions.map((subOption) => (
                <option key={subOption.value} value={subOption.value}>
                  {subOption.label}
                </option>
              ))}
          </select>
        </div>
      )}

      {selectedMainOption && selectedSubOption && (
        <p>
          You selected: {selectedMainOption} - {selectedSubOption}
        </p>
      )}
    </div>
  );
};

export default Dropdown;
