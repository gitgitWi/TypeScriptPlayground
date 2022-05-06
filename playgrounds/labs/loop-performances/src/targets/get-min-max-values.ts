const { min, max } = Math;

export const getMinMaxByMath = (data: number[]) => ({
  min: min(...data),
  max: max(...data),
});

export const getMinMaxByLoop = (data: number[]) => {
  let minV = data[0];
  let maxV = data[0];
  for (const d of data) {
    if (d > maxV) maxV = d;
    else if (d < minV) minV = d;
  }

  return {
    min: minV,
    max: maxV,
  };
};
