/**
 * Applies a binary operation between two values.
 * 
 * The function receives two generic operands and a function representing a binary operation.
 * The operation is applied to the two operands, and the result is returned.
 * This function allows applying any operation that matches the signature provided 
 * by the `operation` parameter.
 * 
 * The function performs the following operations:
 * - Receives two values of generic type `T`.
 * - Applies the provided binary operation to these two values.
 * 
 * @param firstOp - The first operand of generic type `T`.
 * @param secondOp - The second operand of generic type `T`.
 * @param operation - The binary operation to apply between the two operands. It must be a function that receives two parameters of type `T` and returns a value of type `T`.
 * @returns - The result of applying the operation between the two operands, of type `T`.
 * 
 * ```typescript
 * applyOperation(3, 4, (x, y) => x + y) = 7
 * applyOperation(5, 2, (x, y) => x - y) = 3
 * applyOperation(2, 3, (x, y) => x * y) = 6
 * applyOperation(10, 5, (x, y) => x / y) = 2
 * ```
 */

export function applyOperation<T>(firstOp: T, secondOp: T, operation: (x: T, y: T) => T): T {
    return operation(firstOp, secondOp);
}


