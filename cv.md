Skibsky Ivan

telephone: +375(29)533-43-84
mail: skibsky.ivan@yandex.ru
discord: Ivan(@Skibsky-Ivan)

Right now I have one goal: to become a sought-after specialist in the field of the web 
Well, I'm going to look for a job next year. 
Characteristics: persistent, inquisitive. 
Hachu studies hard and acquires new skills.

HTML, CSS, JS, git, VS Code

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

```js
/**
* @param {character[][]} board
* @return {boolean}
*/
function checkLine(board, isRow) {
    for (let i = 0; i < 9; i++) {
        let seen = [];
        for (let j = 0; j < 9; j++) {
            let cell = isRow ? board[i][j] : board[j][i];
            if (cell === '.') continue;
            if (seen.includes(cell)) return false;
            seen.push(cell);
        }
    }
    return true;
}

function checkSquare(board, n, m) {
    let seen = [];
    for (let i = 3 * n; i < 3 * (n + 1); ++i) {
        for (let j = 3 * m; j < 3 * (m + 1); ++j) {
            if (board[i][j] === '.') continue;
            if (seen.includes(board[i][j])) return false;
            seen.push(board[i][j]);
        }
    }
    return true;
}

var isValidSudoku = function (board) {
    if (!checkLine(board, true)) return false;
    if (!checkLine(board, false)) return false;

    for (let n = 0; n < 3; ++n) {
        for (let m = 0; m < 3; ++m) {
            if (!checkSquare(board, n, m)) return false;
        }
    }
    return true;
}
```

https://github.com/Skibsky-Ivan/rsschool-cv/tree/gh-pages

education: BSU, Faculty of Mechanics and Mathematics, specialty mathematics

English: A1. help me with making a CV in markdown (requirements and recommendations in the picture)