import * as React from "react";
import Board from "../Board/Board";
import "./Game.css"

export default class Game extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            movement: new Array(9).fill(0),
            playerX: true,
        }
    }

    render() {
        return (
            <div className="Game">
                <Board move={this.state.movement} onClick={(i) => this.targetSquareClick(i)} />
                {this.checkForWinner()}

            </div>

        );
    }

    targetSquareClick(i) {
        if (!this.state.movement[i]) {
            this.setState(
                (state) => {
                    let movementCopy = state.movement.slice();
                    movementCopy[i] = state.playerX ? 1 : -1;
                    return {
                        playerX: !state.playerX,
                        movement: movementCopy,
                    }
                }
            )
        }
    }

    checkForWinner() {
        let mov = this.state.movement;
        let result = new Array(8);
        result.push(mov[0] + mov[1] + mov[2]);
        result.push(mov[3] + mov[4] + mov[5]);
        result.push(mov[6] + mov[7] + mov[8]);
        result.push(mov[0] + mov[3] + mov[6]);
        result.push(mov[1] + mov[4] + mov[7]);
        result.push(mov[2] + mov[5] + mov[8]);
        result.push(mov[0] + mov[4] + mov[8]);
        result.push(mov[2] + mov[4] + mov[6]);

        if (result.includes(-3)) return "Победитель O";
        if (result.includes(3)) return "Победитель X";
    }
}