import min from 'ml-array-min';

import { xRolling } from './xRolling';

/**
 * This function calculates a minimum within a rolling window
 *
 * @param {Array<number>} array - the array that will be rotated
 * @param {object} [options={}]
 * @param {number} [options.window=5] rolling window
 * @param {string} [options.padding.size=window-1] none, value, circular, duplicate
 * @param {string} [options.padding.algorithm=''] none, value, circular, duplicate
 * @param {number} [options.padding.value=0] value to use for padding (if algorithm='value')
 * @returns {Array<number>}
 */
export function xRollingMin(array, options = {}) {
  return xRolling(array, min, options);
}
