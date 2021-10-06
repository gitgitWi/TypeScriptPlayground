import { range, getRandInt } from "../utils";

export const CompareArray = async () => {
  const { stringArrDummy } = await import("../resources");

  const size = stringArrDummy.length;

  const array1: string[] = [];
  const array2: string[] = [];
  const set1 = new Set<string>([]);

  const addTimeLog = `time for adding`;
  console.info(
    `---Compare Set to Array---\n1. add dummy data to each strucrues`
  );

  console.time(addTimeLog);
  for (const _idx of range(size)) {
    array1[_idx] = stringArrDummy[_idx];
  }
  console.log(`length of array1: `, array1.length);
  console.timeEnd(addTimeLog);

  console.time(addTimeLog);
  for (const _idx of range(size)) {
    array2.push(stringArrDummy[_idx]);
  }
  console.log(`length of array2: `, array2.length);
  console.timeEnd(addTimeLog);

  console.time(addTimeLog);
  for (const _idx of range(size)) {
    set1.add(stringArrDummy[_idx]);
  }
  console.log(`size of set1: `, set1.size);
  console.timeEnd(addTimeLog);

  const readTimeLog = `time for Reading`;
  console.info(`\n2. read dummay data from each structures`);

  console.time(readTimeLog);
  array1.forEach((val) => val);
  console.timeEnd(readTimeLog);

  console.time(readTimeLog);
  set1.forEach((val) => val);
  console.timeEnd(readTimeLog);
};
