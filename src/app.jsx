import React from 'react';
import BattleField from './components/BattleField.jsx';
import Header from './components/Header.jsx';
import  styling  from '../public/css/app.css';

function App () {
    return (
        <div className={styling.mainContainer}>
            <Header />
            <BattleField />
        </div>
    )
}

export default App;