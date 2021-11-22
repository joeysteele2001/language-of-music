/**
 * Get a random number taken from a standard normal distribution (mean 0, variance 1).
 */
export const randn = (): number => {
    // Uses the Box-Muller Transform algorithm
    const u1 = randExclusive();
    const u2 = randExclusive();
    return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
};

/**
 * Generate a random number uniformly distributed between 0 and 1, exclusive.
 */
const randExclusive = (): number => {
    let x = 0;
    while (x === 0) {
        x = Math.random();
    }
    return x;
}