import React from 'react';
import ReactDOM from 'react-dom';
import Game from './component/game';
// import * as Minesweeper from 'minesweeper';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Game/>, root);
});