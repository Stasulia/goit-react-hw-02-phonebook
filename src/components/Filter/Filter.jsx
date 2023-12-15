import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={css.title}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
