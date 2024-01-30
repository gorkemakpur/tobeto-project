import React, { useState } from 'react';
import './SortingDropdown.css';

function SortingDropdown({ onSortChange }) {
  const [sortOrder, setSortOrder] = useState('name-asc'); // Varsayılan sıralama düzeni

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    onSortChange(event.target.value); // Üst component'e sıralama değişikliğini bildir
  };

  return (
    <div className="sorting-dropdown-container">
      <select
        value={sortOrder}
        onChange={handleSortChange}
        className="custom-sorting-dropdown"
      >
        <option value="name-asc">Adına Göre (A-Z)</option>
        <option value="name-desc">Adına Göre (Z-A)</option>
        <option value="date-asc">Tarihe Göre (Y-E)</option>
        <option value="date-desc">Tarihe Göre (E-Y)</option>
      </select>
    </div>
  );
}

export default SortingDropdown;
