import Square from "./Square.js";
import ArrayQueue from "./ArrayQueue.js";

export default class Board {
    constructor() {
        this.squares = [];
        this.createSquares();
        this.setAllSquaresMoves();
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

    setAllSquaresMoves() {
        for (let i = 0; i < this.squares.length - 1; i++) {
            this.setMoves(this.squares[i]);
        }
    }

    knightMoves(startPosition, endPosition) {
        let startingNode = this.getSquare(startPosition);
        let endingNode = this.getSquare(endPosition);

        let queue = new ArrayQueue();
        queue.enqueue({ node: startingNode, path: [] });
        while (!queue.isEmpty()) {
            let current = queue.getFront();

            // If current is our goal, return the path as an array of nodes
            if (this.arraysEqual(current.node.getPosition(), endPosition)) {
                return [...current.path, current.node];
            }

            // Add moves to the queue
            for (let i = 1; i <= 7; i++) {
                if (current.node.getMoves()[i] !== undefined) queue.enqueue({ node: current.node.getMoves()[i], path: [...current.path, current.node]});
            }
            
            queue.dequeue();
        }
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