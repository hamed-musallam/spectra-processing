import { check } from './check';
/**
 * Finds all the max value in a zone
 * If the values are equal it is considered as a maxima !
 *
 * @param {object} [points={}] - Object of points contains property x (an ordered increasing array) and y (an array)
 * @param {object} [options={}]
 * @return {Array} Array of points
 */

export function maximaY(points = {}) {
  check(points);
  const { x, y } = points;
  if (x.length < 3) return [];
  let maxima = [];
  let startEqualIndex = -1;
  for (let i = 1; i < x.length - 1; i++) {
    if (y[i - 1] < y[i] && y[i + 1] < y[i]) {
      maxima.push({ x: x[i], y: y[i], index: i });
    } else if (y[i - 1] < y[i] && y[i + 1] === y[i]) {
      startEqualIndex = i;
    } else if (y[i - 1] === y[i] && y[i + 1] < y[i]) {
      let index = ((i + startEqualIndex) / 2) >> 0;
      maxima.push({ x: x[index], y: y[index], index });
    }
  }
  return maxima;
}
