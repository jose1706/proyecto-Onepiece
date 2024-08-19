import React from "react";
//import { useAuth } from '../Hooks/useAuth';
import { NavLink } from "react-router-dom";

export const BrowserBar: React.FC = () => {
    //const { user, logOut } = useAuth();

    return (
    <>
        <header className='container'>
            <NavLink to='search' className='logo'>
                <img
                    src='https://1000marcas.net/wp-content/uploads/2022/10/One-Piece-Emblem.png'
                    alt='Logo onePiece'
                />
            </ NavLink>
    
            <form /* {onSubmit={onSearchSubmit}} */>
                <div className='form-group'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='icon-search'
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
                        id=''
                        //value={valueSearch}
                        //onChange={onInputChange}
                        placeholder='Buscar nombre de fruta'
                    />
                </div>
    
                <button className='btn-search'>Buscar</button>
            </form>
        </header>
    </>
    )

};