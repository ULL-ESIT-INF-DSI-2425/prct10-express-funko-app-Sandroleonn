/**
 * Filters, sorts, and processes a list of favorite strings.
 * Removes all occurrences of the letters 'a' and 'e', sorts the words, and joins them into a single string.
 * If no valid strings are provided, returns 'Broken!'.
 * @param favorites - A variable number of string arguments representing Chuck Norris' favorite things.
 * @returns - A processed string with the required modifications or 'Broken!' if no valid input is given.
 * ```typescript
 * onePunch('Beard', 'Jeans', 'Hairbrush', 'Knuckleduster', 'Sand') = 'Brd Hirbrush Jns Knuckldustr Snd'
 * onePunch('Sock', 'Beard', 'Vest', 'Lady', 'Sage') = 'Brd Ldy Sg Sock Vst'
 * ```
 */
export function onePunch(...favorites: string[]): string { return favorites.length === 0 || favorites.every(str => str === '') ? 'Broken!' : favorites.filter(str => str !== '').map(str => str.replace(/[ae]/gi, '')).sort().join(' '); }