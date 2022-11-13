import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleNameChange = (event) => {
    setInputValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (inputValue.trim() === '') {
      return toast.warning('Write something');
    }
    onSubmit(inputValue);

    setInputValue('');
  };

  return (
    <div className="Searchbar">
      <form className="SearchForm" action="" onSubmit={handleSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          name="inputValue"
          value={inputValue}
          onChange={handleNameChange}
          placeholder="Search images and photos"
        />
        <button className="SearchForm-button" type="submit">
          <FaSearch size="2em" />
        </button>
      </form>
    </div>
  );
}
