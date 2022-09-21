export default function two_crystal_balls(breaks: boolean[]): number {
    let end = breaks.length;
    const jumpAmount = Math.floor(Math.pow(breaks.length, 1 / 2));
    let i = jumpAmount;

    for (; i < end; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;

    for (let j = 0; j < jumpAmount && i < end; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
