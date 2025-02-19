/**
 * Generates a spiral matrix of given dimension.
 * @param dimension - The size of the matrix (NxN). Must be a positive integer.
 * @returns - A 2D array filled with numbers in a spiral order, or `undefined` if `dimension` is 0 or negative.
 * ```typescript
 * getSpiralMatrix(3)
 * // Returns:
 * // [
 * //   [1, 2, 3],
 * //   [8, 9, 4],
 * //   [7, 6, 5]
 * // ]
 * 
 * getSpiralMatrix(4)
 * // Returns:
 * // [
 * //   [1, 2, 3, 4],
 * //   [12, 13, 14, 5],
 * //   [11, 16, 15, 6],
 * //   [10, 9, 8, 7]
 * // ]
 * 
 * getSpiralMatrix(0) 
 * // Returns undefined (invalid input)
 * ```
 */
export function getSpiralMatrix(dimension: number): number[][] | undefined {
    if (dimension <= 0) {
        return undefined;
    }
    let matrix: number[][] = [];
    for (let i = 0; i < dimension; i++) {
        matrix[i] = new Array(dimension).fill(0);
    }

    let left = 0, right = dimension - 1, top = 0, bottom = dimension - 1;
    let num = 1;

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }
    }

    return matrix;
}

