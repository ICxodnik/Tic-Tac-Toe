import * as React from "react";
import "./Square.css"

export default class Squre extends React.Component {

    render() {
        return (
            <div className="Square" onClick={this.props.onClick}>
               {this.moveImage()}
            </div>
        );
    }

    moveImage() { //1 = X, -1 = O, 0 = -
        if (this.props.move == 0) return "-";
        if (this.props.move == 1) return "X";
        return "O"
    }

}