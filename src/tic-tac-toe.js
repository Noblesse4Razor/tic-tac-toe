Array.prototype.Sum = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++)
        sum += this[i];
    return sum;
}

Array.prototype.getColumn = function (col) {
    let column = [];
    for (let i = 0; i < this.length; i++) {
        column.push(this[i][col]);
    }
    return column;
}

class TicTacToe {
    constructor() {
        this.Field = [[null, null, null],
            [null, null, null],
            [null, null, null]];
        this.Player = true;
    }

    getCurrentPlayerSymbol() {

        return this.Player ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.Field[rowIndex][columnIndex] != null) return this.getCurrentPlayerSymbol;
        this.Field[rowIndex][columnIndex] = this.Player ? 1 : -1;
        this.Player = !this.Player;
    }

    isFinished() {
        return (this.getWinner() != null || this.noMoreTurns());
    }

    getWinner() {

        let F = this.Field;

        for (let i = 0; i < 3; i++) {
            if (F[i].Sum() == 3 || F[i].Sum() == -3) return F[i][0] == 1 ? 'x' : 'o';
        }

        for (let i = 0; i < 3; i++) {
            if (F.getColumn(i).Sum() == 3 || F.getColumn(i).Sum() == -3) return F[0][i] == 1 ? 'x' : 'o';
        }

        if (F[1][1] === null) return null;
        if ((F[0][0] === F[1][1] && F[0][0] === F[2][2]) || (F[0][2] === F[1][1] && F[0][2] === F[2][0])) return F[1][1] == 1 ? 'x' : 'o';

        return null;

    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.Field[i][j] === null) return false
            }// if(this.Field[i].some(x => x == null)) return false;

        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.Field[rowIndex][colIndex] == null) return null;
        return this.Field[rowIndex][colIndex] == 1 ? 'x' : 'o';
    }
}

module.exports = TicTacToe;
