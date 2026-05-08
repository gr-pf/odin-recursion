/**
 *
 * @param {Number} n
 * @returns {Number[]}
 */
export function fibs(n) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }
  const res = [0, 1];
  for (let i = 2; i < n; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }
  return res;
}

/**
 *
 * @param {Number} n
 * @returns {Number[]}
 */
export function fibsRec(n) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }
  const rec = fibsRec(n - 1);
  return rec.concat(rec[rec.length - 1] + rec[rec.length - 2]);
}
