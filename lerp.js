/**
 * Perform linear interpolation.
 *
 * @param {number} min
 * The minimum possible value.
 *
 * @param {number} max
 * The maximum possible value.
 *
 * @param {number} percentage
 * The percentage to interpolate between `min` and `max`.
 * @returns
 */
export function lerp(
  min,
  max,
  percentage
) {
  return min + (max - min) * percentage;
}

export default lerp;
