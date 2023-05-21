import Board from "./Board.js";
import Square from "./Square.js";

let n = -2;
let letter = String.fromCharCode("c".charCodeAt(0) + n);
console.log(letter);

let b = new Board();
// b.getSquare("c", 4);
let d4 = new Square(["d", 4]);
b.setMoves(d4);
console.log("d4 moves:");
// console.log(d4.getMoves());

let a1 = new Square(["a", 1]);
b.setMoves(a1);
console.log("a1 moves:");
// console.log(a1.getMoves());

let c2 = b.getSquare(["c", 2]);
console.log("c2 moves:");
// console.log(c2.getMoves());

printKnightMoves(b.knightMoves(["d", 8], ["d", 7]));

function printKnightMoves(moves) {
    console.log("You made it in " + (moves.length - 1) + " moves! Here's your path:");

    for (let move of moves) {
        console.log(move.position);
    }
}