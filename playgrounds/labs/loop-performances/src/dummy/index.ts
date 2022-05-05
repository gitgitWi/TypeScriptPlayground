/**
 * APPLE 1분봉 데이터
 * 2021.05.01.~2022.05.01., 항목별 15635개
 * @see https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=1&from=1619794800&to=1651330800&token=
 */
export const loadAppleMinutes = () => import('./apple-munites.json');

/**
 * APPLE 30분봉 데이터
 * 2021.05.01.~2022.05.01., 항목별 647개
 * @see https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=30&from=1619794800&to=1651330800&token=
 */
export const loadApple30Mins = () => import('./apple-30mins.json');

/**
 * APPLE 일봉 데이터
 * 2021.05.01.~2022.05.01., 항목별 253개
 * @see https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=D&from=1619794800&to=1651330800&token=
 */
export const loadAppleDays = () => import('./apple-days.json');
