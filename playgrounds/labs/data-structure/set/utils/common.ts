export const { MAX_SAFE_INTEGER, MIN_SAFE_INTEGER } = Number;
export const { random, floor } = Math;

export function* range(size: number) {
  let i = 0;
  while (i < size) yield i++;
  return i;
}

export const getRandInt = (size = 100, start = 0, end = size): number => {
  const randInt = floor(random() * size) * (random() > 0.5 ? 1 : -1);
  return randInt <= end && randInt >= start
    ? randInt
    : getRandInt(size, end, start);
};

export const getHashString = (size = 100): string => {
  if (size <= 0) throw new TypeError(`Incorrect Size!`);

  let hash = Array(size).fill("");
  for (let idx of range(size)) {
    hash[idx] = getRandInt(36).toString(36);
  }
  return hash.join("");
};
