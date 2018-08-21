import * as React from "react";
import Square from "../Square/Square";
import "./Board.css"

export default class Board extends React.Component {

    generateSqures() {
        let items = [];
        for (let i = 0; i < 9; i++) {
            items.push(
                <Square 
                    key={i} 
                    move={this.props.move[i]} 
                    onClick={()=>this.props.onClick(i)} 
                />
            );
        }
        return items;
    }

    render() {
        return (
            <div className="Board">
                {this.generateSqures()}
            </div>
        );
    }


}