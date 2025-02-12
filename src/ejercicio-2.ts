/**
 * Validates a credit card number using the Luhn algorithm.
 * Checks whether the credit card number is valid based on the Luhn formula.
 * If the credit card number is valid, returns 'valid'; if invalid, returns 'notValid'.
 * If the input is malformed or does not contain exactly 16 digits, returns `undefined`.
 * @param creditcard - A string or number representing the credit card number. It can include spaces or be a numeric value.
 * @returns - 'valid' if the credit card is valid, 'notValid' if invalid, or `undefined` if the input is not a valid 16-digit number.
 * ```typescript
 * checkCreditCard('1234 5678 1234 5678') = 'notValid'
 * checkCreditCard(1234567812345670)     = 'valid'
 * checkCreditCard('1234 5678 1234 56ab') = undefined
 * ```
 */
export function checkCreditCard(creditcard: string | number): "valid" | "notValid" | undefined {
    if (typeof creditcard == 'number') {
        creditcard = creditcard.toString();
    }
    creditcard = creditcard.split(' ').join('');
    if (creditcard.length != 16) {
        return undefined;
    }
    let sum = 0;
    for (let i = 0; i < creditcard.length; i++) {
        if (creditcard[i] < '0' || creditcard[i] > '9') {
            return undefined;
        }
        let digit = parseInt(creditcard[i]);
        if (i % 2 == 0) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }
    if (sum % 10 == 0) {
        return 'valid';
    }
    else {
        return 'notValid';
    }
}   
