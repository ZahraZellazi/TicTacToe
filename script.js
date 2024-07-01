document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';

    cells.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true });
    });

    function handleClick(event) {
        const cell = event.target;
        cell.innerText = currentPlayer;
        cell.classList.add(currentPlayer.toLowerCase());

        if (checkWin(currentPlayer)) {
            setTimeout(() => alert(currentPlayer + ' wins!'), 10);
        } else if (isDraw()) {
            setTimeout(() => alert('It\'s a draw!'), 10);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function checkWin(currentPlayer) {
        return winningCombinations.some(combination => {
            return combination.every(index => {
                return cells[index].innerText === currentPlayer;
            });
        });
    }

    function isDraw() {
        return [...cells].every(cell => {
            return cell.innerText === 'X' || cell.innerText === 'O';
        });
    }
});
