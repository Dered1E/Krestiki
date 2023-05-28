alert( "Кот" );

//игровое поле
var board = ['', '', '', '', '', '', '', '', ''];

// очки для x
var	scoreX = 0;

// очки для O
var scoreO = 0; 

// очки для T
var scoreT = 0; 

//игрок
var currentPlayer = 'X';

  function Pgame() {

      var player = document.getElementById('Player').value;
      var player2 = document.getElementById('Player2').value;

      alert('Игрок 1 - X: ' + player + "\n" + 'Игрок 2 - O: ' + player2);
    
    }


//при клике на ячейку задействуется данная функиция , в функции происходит проверка , занята ли клетка , если да то выводится сообщение , если нет nj  
function makeMove(cellIndex) {
	if (board[cellIndex - 1] === '') {
		board[cellIndex - 1] = currentPlayer;

		document.getElementById('cell-' + cellIndex).innerHTML = currentPlayer;
		if (checkForWin()) {
			alert('Игрок ' + currentPlayer + ' Выйграл!');
		
			    if (currentPlayer === 'X') {
        		scoreX++;
       
        		document.getElementById("ScoreX").innerHTML = scoreX;
     			} else if (currentPlayer === 'O') {
        		scoreO++;

        		document.getElementById("ScoreO").innerHTML = scoreO;
      			}
			resetBoard();
		} else if (checkForTie()) {
			//если проходит проверка на ничью то выводится сообщение и сбрасывается игровое поле
			alert('Ничья');
			scoreT++;
			document.getElementById("ScoreT").innerHTML = scoreT;
			resetBoard();
				
		} else {
			//меняеv значение переменной currentPlayer на противоположное
			currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		}
	}
	else  {
		alert('Поле занято');
	}
}

//очень много проверок на выйгрыш 
function checkForWin() {
	if (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) {
		return true;
	} else if (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) {
		return true;
	} else if (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) {
		return true;
	} else if (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) {
		return true;
	} else if (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) {
		return true;
	} else if (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) {
		return true;
	} else if (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) {
		return true;
	} else if (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer) {
		return true;
	} else {
		return false;
	}
}

// проверка на ничью 
function checkForTie() {
	for (var i = 0; i < board.length; i++) {
		if (board[i] === '') {
			return false;
		}
	}
	return true;
}

function resetBoard() {
	//массив board является картой 
	board = ['', '', '', '', '', '', '', '', ''];

	//цыкл проходит по всем ячейкам и присваивает им пустое значение 
	for (var i = 1; i <= 9; i++) {
		document.getElementById('cell-' + i).innerHTML = '';
	}
}