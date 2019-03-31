import React, { useState, useEffect } from 'react';
import classes from './SongsFilter.module.css';

const SongsFilter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState({ searchKey: '', level: 0 });
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  useEffect(() => {
    onFilterChange(filter);
  }, [filter]);

  const handleInputChange = (event) => {
    setFilter({ ...filter, searchKey: event.target.value });
  }

  const handleSelectChange = (event) => {
    setFilter({ ...filter, level: parseInt(event.target.value) });
  }

  return (
    <div className={classes.wrapper}>
      <input
        type="text"
        placeholder="Search Songs"
        className={classes.search}
        value={filter.searchKey}
        onChange={handleInputChange}
      />
      <select
        className={classes.level}
        value={filter.level}
        onChange={handleSelectChange}
      >
        <option>Select Level</option>
        {levels.map((level) => <option value={level}>{level}</option>)}
      </select>
    </div>
  )
}

export default SongsFilter
