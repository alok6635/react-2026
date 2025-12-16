import React from 'react';
import "./header.css";

export const Header = () => {
  return (
   <header>
    <div className='container'>
        <div className='header_cover'>
        <div className='header_text'>
            <h1>H & S Dashboard</h1>
            <ul>
                <li>Home
                </li>/
                <li>report
                </li>/
                <li>H & S
                </li>
            </ul>
        </div>
       <button className='btn'>Add New H & S</button>
        </div>
    </div>
   </header>
  )
}
