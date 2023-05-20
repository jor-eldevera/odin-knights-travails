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
console.log(d4.getMoves());

console.log("a".charCodeAt(0));
console.log("h".charCodeAt(0));