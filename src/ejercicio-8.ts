/**
 * Finds all possible paths from the top-left corner to the bottom-right corner of a matrix,
 * only allowing movement to the right or downward at each step.
 * @param rows - The number of rows in the matrix.
 * @param cols - The number of columns in the matrix.
 * @param matrix - A 2D array representing the matrix, where each element represents a value.
 * @returns - An array of arrays, where each inner array represents a valid path from the top-left
 *   corner to the bottom-right corner, including the values along the path.
 *   If no valid paths exist, returns an empty array.
 * 
 * ```typescript
 * getPaths(2, 2, [
 *   [1, 2],
 *   [3, 4]
 * ]) 
 * // Returns [[1, 2, 4], [1, 3, 4]]
 * 
 * getPaths(3, 3, [
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9]
 * ])
 * // Returns [
 * //   [1, 2, 5, 8, 9], 
 * //   [1, 2, 5, 6, 9],
 * //   [1, 4, 5, 8, 9],
 * //   [1, 4, 5, 6, 9]
 * // ]
 * 
 * getPaths(2, 2, [
 *   [1, 2],
 *   [3, 4]
 * ]) 
 * // Returns [[1, 2, 4], [1, 3, 4]]
 * ```
 */
export function getPaths(rows: number, cols: number, matrix: number[][]): number[][] {
  function findPaths(row: number, col: number, path: number[], paths: number[][]): void {
    path.push(matrix[row][col]);

    if (row === rows - 1 && col === cols - 1) {
      paths.push([...path]);
    } else {

      if (row < rows - 1) {
        findPaths(row + 1, col, path, paths);
      }

      if (col < cols - 1) {
        findPaths(row, col + 1, path, paths);
      }
    }

    path.pop();
  }

  const paths: number[][] = [];
  findPaths(0, 0, [], paths);

  return paths;
}

  

  