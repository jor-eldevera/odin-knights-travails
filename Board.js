import Square from "./Square.js";

export default class Board {
    constructor() {
        this.squares = [];
        this.createSquares();
    }

    createSquares() {
        let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
        for (let i = 0; i < 8; i++) {
            let letter = letters[i];
            for (let j = 1; j <= 8; j++) {
                let num = j;

                this.squares.push(new Square([letter, num]));
            }
        }
    }

    getSquare(position) {
        for (let i = 0; i < this.squares.length - 1; i++) {
            if (this.arraysEqual(this.squares[i].getPosition(), position)) {
                return this.squares[i];
            }
        }

        return undefined;
    }

    setMoves(square) {
        let moves = [];
        // -2 letters, +1 numbers
        moves[0] = this.getSquare([this.changeChar(square.getLetter(), -2), square.getNumber() + 1]);

        // -1 letters, +2 numbers
        moves[1] = this.getSquare([this.changeChar(square.getLetter(), -1), square.getNumber() + 2]);

        // +1 letters, +2 numbers
        moves[2] = this.getSquare([this.changeChar(square.getLetter(), 1), square.getNumber() + 2]);
        
        // +2 letters, +1 numbers
        moves[3] = this.getSquare([this.changeChar(square.getLetter(), 2), square.getNumber() + 1]);
        
        // +2 letters, -1 numbers
        moves[4] = this.getSquare([this.changeChar(square.getLetter(), 2), square.getNumber() - 1]);

        // +1 letters, -2 numbers
        moves[5] = this.getSquare([this.changeChar(square.getLetter(), 1), square.getNumber() - 2]);
        
        // -1 letters, -2 numbers
        moves[6] = this.getSquare([this.changeChar(square.getLetter(), -1), square.getNumber() - 2]);

        // -2 letters, -1 numbers
        moves[7] = this.getSquare([this.changeChar(square.getLetter(), -2), square.getNumber() - 1]);

        square.setMoves(moves);
    }

    changeChar(c, n) {
        return String.fromCharCode(c.charCodeAt(0) + n);
    }

    arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;
      
        for (var i = 0; i < a.length; ++i) {
          if (a[i] !== b[i]) return false;
        }
        return true;
    }
}