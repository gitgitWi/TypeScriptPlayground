/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
 * - FireFox는 ms 이하 단위 모두 버림, `console.time`도 마찬가지
 */
export const getPerformanceTimes = (func: Function): number => {
  const time1 = performance.now();
  func();
  const time2 = performance.now();

  return time2 - time1;
};
