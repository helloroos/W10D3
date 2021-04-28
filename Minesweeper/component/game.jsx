import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component {
    constructor(props) {
        super(props)

        const boardObject = new Minesweeper.Board(9, 6);

        this.state = {
            board: boardObject
        }

        this.updateGame = this.updateGame.bind(this);
    }

    updateGame() {

    }

    render() {
        return(
            <div>
                <Board board={this.state.board} updateGame={this.updateGame}/>
            </div>
        )
    }
}

export default Game;