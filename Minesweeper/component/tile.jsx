import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper';

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.tileStatus = this.tileStatus.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const altClick = e.altKey;
        this.props.updateGame(this.props.tile, altClick);
    }

    tileStatus() {
        let symbol = " ";
        const tileObj = this.props.tile;
        if (tileObj.explored) {
            symbol = "  ";
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
        let classText = "";
        if (sym == " " || sym == "🚩") {
            classText = "tile-container unexplored";
        } else {
            classText = "tile-container explored";
        }

        return (
            <div className={classText} onClick={this.handleClick}>
                {sym}
            </div>
        )
    }
}

export default Tile;