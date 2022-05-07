// export * from './repositories';
// export * from './types';

import { SqliteRepository } from './repositories';

// TODO remove after test
(function main() {
  const tableName = `stock_prices`;
  const repo = new SqliteRepository('./test.sqlite');

  repo.createTable({
    name: tableName,
    columns: {
      id: {
        type: 'INTEGER',
        isPrimary: true,
        needAutoIncrement: true,
      },
      // 종목코드
      stockCode: {
        type: 'TEXT',
        isUnique: true,
        needNotNull: true,
      },
      // 주기
      interval: {
        type: 'TEXT',
        needNotNull: true,
        defaultValue: '1d',
      },
      // 차트 시고저종가, 거래량 데이터
      prices: {
        type: 'TEXT',
        needNotNull: true,
      },
      // 데이터 시작일
      periodStart: {
        type: 'TEXT',
        needNotNull: true,
      },
      // 데이터 마지막일
      periodEnd: {
        type: 'TEXT',
        needNotNull: true,
      },
      // api 제공업체
      vendor: {
        type: 'TEXT',
        needNotNull: true,
      },
      // 업데이트일, Date.now()
      updatedAt: {
        type: 'INTEGER',
        needNotNull: true,
      },
    },
  });

  repo.selectTable(tableName);

  const readResult = repo.readByKey({ keyColumn: 'stockCode', keyValue: '005930' });
  console.log({ readResult });
})();
