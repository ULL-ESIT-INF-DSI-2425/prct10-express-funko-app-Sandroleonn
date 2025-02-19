type Cell = '-' | 'N' | 'B';
type Row = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];
export type ChessBoard = [Row, Row, Row, Row, Row, Row, Row, Row];

/**
 * Checks whether two pieces (N and B) on a chessboard attack each other.
 * @param board - A 2D array representing the chessboard. It must have exactly 8 rows and each row must have exactly 8 columns.
 *   - The value of each cell must be "-", "N" (representing a piece), or "B" (representing the other piece).
 * @returns - `true` if the pieces attack each other, `false` if they don't, or `undefined` if the input is invalid.
 *   - A valid board should have exactly one "N" and one "B".
 * ```typescript
 * checkAttack([
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["N", "-", "-", "-", "-", "-", "-", "B"]
 * ])
 * // Returns true (pieces on the same diagonal)
 * 
 * checkAttack([
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["N", "-", "-", "-", "-", "-", "-", "B"]
 * ])
 * // Returns true (pieces on the same column)
 * 
 * checkAttack([
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["N", "-", "-", "-", "-", "-", "-", "-"]
 * ])
 * // Returns false (pieces do not attack each other)
 * 
 * checkAttack([
 *   ["N", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "-"],
 *   ["-", "-", "-", "-", "-", "-", "-", "B"]
 * ])
 * // Returns undefined (invalid input, pieces not in valid positions)
 * ```
 */
export function checkAttack(board: string[][]): boolean | undefined {
    if (board.length !== 8) return undefined;

    let countN = 0, countB = 0;

    for (const row of board) {
        if (row.length !== 8) return undefined;
        
        for (const cell of row) {
            if (!["-", "N", "B"].includes(cell)) return undefined;
            if (cell === "N") countN++;
            if (cell === "B") countB++;
        }
    }

    if (countN !== 1 || countB !== 1) return undefined;

    let rowN = -1, colN = -1, rowB = -1, colB = -1;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === "N") {
                rowN = i;
                colN = j;
            }
            if (board[i][j] === "B") {
                rowB = i;
                colB = j;
            }
        }
    }

    if (rowN === rowB || colN === colB) return true;

    if (Math.abs(rowN - rowB) === Math.abs(colN - colB)) return true;

    return false;
}


