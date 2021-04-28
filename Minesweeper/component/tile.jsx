import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper';

class Tile extends React.Component {
    constructor(props) {
        super(props)
        // console.log(this.props);
        this.tileStatus = this.tileStatus.bind(this);
    }

    tileStatus() {
        let symbol = "T";
        const tileObj = this.props.tile;
        if (tileObj.explored) {
            if (tileObj.bombed) {
                symbol = "💣";
            } else {
                if (tileObj.adjacentBombCount() > 0) {
                    symbol = tileObj.adjacentBombCount();
                }
            }
        } else {
            if (tileObj.flagged) {
                symbol = "🚩";
            }
        }
        return symbol;
    }

    render() {
        let sym = this.tileStatus();
        return (
            <div className="tile-container">
                {sym}
            </div>
        )
    }
}

export default Tile;