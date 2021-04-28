import React from 'react';
import Tile from './tile';
import * as Minesweeper from '../minesweeper';

class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const board = this.props.board.grid;

        let rows = board.map((row, rIdx) => {
            let tiles = row.map((tile, tIdx) => {
                return (
                    <Tile key={tIdx} tile={tile} updateGame={this.props.updateGame} />
                )
            });
            return (
                <div key={rIdx}> {tiles} </div>
            )
        });

        return (
            <div className="grid-container">
                {rows}
            </div>
        )
    }
}

export default Board;