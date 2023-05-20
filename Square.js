export default class Square {
    constructor(position) {
        this.position = position;
        this.moves = new Array(8);
    }

    getPosition() {
        return this.position;
    }

    getLetter() {
        return this.position[0];
    }

    getNumber() {
        return this.position[1];
    }

    setMoves(arr) {
        this.moves = arr;
    }

    getMoves() {
        return this.moves;
    }
}