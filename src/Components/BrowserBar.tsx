import React, { useState } from "react";
import { useDevilFruit } from '../Hooks/useDevilFruit';
import { NavLink } from "react-router-dom";

export const BrowserBar: React.FC = () => {
  const { setSearchTerm } = useDevilFruit();
  const [inputValue, setInputValue] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <header className='browser-bar'>
      <NavLink to='/CorePage' className='browser-bar__logo'>
        <img
          src='https://1000marcas.net/wp-content/uploads/2022/10/One-Piece-Emblem.png'
          alt='Logo onePiece'
          className='browser-bar__logo-img'
        />
      </NavLink>

      <div className='browser-bar__form-group'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='browser-bar__icon-search'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
        <input
          type='search'
          name='valueSearch'
          value={inputValue}
          onChange={handleSearchChange}
          placeholder='Buscar nombre de fruta'
          className='browser-bar__input'
        />
      </div>
    </header>
  );
};

