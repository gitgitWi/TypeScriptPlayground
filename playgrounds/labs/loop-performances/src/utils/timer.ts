/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
 * - FireFox/Safari는 ms 이하 단위 모두 버림, `console.time`도 마찬가지
 */
export const getPerformanceTimes = (func: Function) => {
  const time1 = performance.now();
  const result = func();
  const time2 = performance.now();

  return { times: time2 - time1, result };
};

export const getConsoleTimes = (
  func: Function,
  funcName = func.name,
  { description = '' } = {}
) => {
  const timerKey = `[${funcName}] ${description}`;
  console.time(timerKey);
  const result = func();
  console.timeEnd(timerKey);
  return result;
};
