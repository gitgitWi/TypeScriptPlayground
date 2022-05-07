/**
 * @see https://v8.dev/blog/array-sort
 * - JS 엔진마다 내부 알고리즘은 조금씩 다름
 * - V8 엔진 v7 이후로는 timsort를 사용하는 듯
 * @see https://stackoverflow.com/questions/57763205/what-is-array-prototype-sort-time-complexity
 * - Firefox는 merge sort?
 */
export const sortByArraySort = (data: number[]) => data.sort((a, b) => a - b);
