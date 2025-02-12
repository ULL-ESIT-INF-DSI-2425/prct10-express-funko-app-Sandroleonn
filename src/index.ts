/**
 * Add two numbers __numbers__
 * @param firstNumber - Consists of the first operand of the addition
 * @param secondNumber - Consists of the second operand of the addition
 * @param remainingNumbers - Consists of remaining
 * @returns - The addition of the two above numbers
 * ```typescript
 * add(1,7) = 8
 * add(8,-3) = 5
 * ```
 */

export function add(
  firstNumber: number,
  secondNumber: number,
  ...remainingNumbers: number[]
) {
  let result = firstNumber + secondNumber;
  if (remainingNumbers.length) {
    result += remainingNumbers.reduce((prev, current) => prev + current);
  }
  return result;
}


