class TicTacToe {
    constructor() {
	  this.Field = [[null,null,null],
				  [null,null,null],
				  [null,null,null]];
	
	  this.Player = true;
    }
    getCurrentPlayerSymbol() {

		return this.Player ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
		if (this.Field[rowIndex][columnIndex] != null) return this.getCurrentPlayerSymbol();
		this.Field[rowIndex][columnIndex] = this.Player;
		this.Player = !this.Player;
    }

    isFinished() {
		return (this.getWinner!=null || this.noMoreTurns);
    }

    getWinner() {
		
	function getCol(matrix, col)
	{
       let column = [];
       for(let i=0; i<matrix.length; i++){
          column.push(matrix[i][col]);
       }

       return column;
    }
	
	let F = this.Field;
		
		for (let i = 0; i < 2; i++)
		{
			if (F[i].every(x=> x == true || x == false)) return F[i] ? 'x' : 'o';
		}
		
		for (let i = 0; i < 2; i++)
		{
			if (getCol(F,i).every(x=> x == true || x == false)) return F[i] ? 'x' : 'o';
		}
		
		if (F[0][0]==F[1][1]==F[2][2] || F[0][2] == F[1][1]== F[2][0]) return F[1][1] ? 'x' : 'o';
		
		return null;
		
    }

    noMoreTurns() {
		return !this.Field.some(x=>x==null);
    }

    isDraw() {
		
    }

    getFieldValue(rowIndex, colIndex) {
		return this.Field[rowIndex][colIndex] ? 'x' : 'o';
    }	
}

module.exports = TicTacToe;
