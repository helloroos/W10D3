import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component {
    constructor(props) {
        super(props)

        const boardObject = new Minesweeper.Board(9, 10);

        this.state = {
            board: boardObject
        }

        this.updateGame = this.updateGame.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    resetGame() {
        const boardObject = new Minesweeper.Board(9, 10);
        this.setState({ board: boardObject });
    }

    updateGame(tile, flag) {
        if (flag) {
            tile.toggleFlag();
        } else {
            tile.explore();
        };
        this.setState({ board: this.state.board })
    };

    render() {
        if (this.state.board.lost() || this.state.board.won()) {
            console.log("game over")
            // this.resetGame();
        }
        return(
            <div className="game-container">

                <Board board={this.state.board} updateGame={this.updateGame}/>
            </div>
        )
    }
}

export default Game;