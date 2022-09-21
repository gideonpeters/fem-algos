export default function bs_list(haystack: number[], needle: number): boolean {
    let start = 0;
    let end = haystack.length;

    while (start < end) {
        const mid = Math.floor(start + (end - start) / 2);
        const val = haystack[mid];

        if (needle === val) {
            return true;
        } else if (needle < val) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return false;
}
