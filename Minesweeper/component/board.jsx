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
                    <div key={rIdx}>
                        {row.map((tile, tIdx) => {
                            return <Tile key={tIdx} tiles={tile} updateGame={this.props.updateGame}/>
                        })}
                    </div>
                })}
            </div>
        )
    }
}

export default Board;