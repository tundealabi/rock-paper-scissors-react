import React from 'react';
import style from '../../public/css/header.css';

function Header () {
    return (
        <div className={style.header}>
            <h1>Man vs computer</h1>
            <p>3 Weapons ︱ 5 Lives ︱ 2 Destinies</p>
            <p>Rock beats Scissors ︱ Scissors beats Paper ︱ Paper beats Rock</p>
            <p>Choose your weapon!</p>
        </div>
    )
}

export default Header;