# Skibsky Ivan

![](my_photo.jpg)

## Contact Information

- **Phone:** +375(29)533-43-84  
- **Email:** skibsky.ivan@yandex.ru  
- **Discord:** Ivan (@Skibsky-Ivan)

## Brief Self-Introduction

My main goal right now is to become an in-demand specialist in web development. I plan to actively look for a job next year.

My key qualities: persistence, curiosity, and the ability to independently figure out complex topics.

I am ready to study hard and constantly acquire new skills to benefit the team and grow as a professional.

## Skills

- HTML, CSS  
- JavaScript  
- Git  
- VS Code  

## Code Example (Codewars)

**Task:** Determine if a 9×9 Sudoku board is valid (no repetitions in rows, columns, and 3×3 sub-boxes).

```javascript
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

## Work Experience  
  
[CV in Markdown](https://github.com/Skibsky-Ivan/rsschool-cv/tree/gh-pages)

## Education

- **BSU (Belarusian State University)**  
Faculty of Mechanics and Mathematics  
Major: Mathematics

## English Language

- **Level**: A1 (Beginner).  
I am currently actively learning English to read technical documentation and communicate in a professional environment.