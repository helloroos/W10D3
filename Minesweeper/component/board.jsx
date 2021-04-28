import React from 'react';
import Tile from './tile';
import * as Minesweeper from '../minesweeper';

class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const board = this.props.board.grid;
        return(
            <div>
                {board.map((row, rIdx) => {
                    <div></div>
                    return row.map((tile, tIdx) => {
                        <Tile board={board} pos={}/>
                    })
                }
                )}
            </div>
        )
    }
}

export default Board;