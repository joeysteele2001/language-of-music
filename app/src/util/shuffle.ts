/** Randomize the order of `arr` in a new array. */
export const randomize = <T>(arr: T[]): T[] => {
    const copy = arr.slice();
    shuffle(copy);
    return copy;
}

/** Shuffle the elements of `arr` (in-place). */
export const shuffle = <T>(arr: T[]) => {
    // Use the Durstenfeld shuffle algorithm
    // adapted from a StackOverflow post (2450954)
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
}