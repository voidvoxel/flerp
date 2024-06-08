export function lerp(
  min: number,
  max: number,
  percentage: number
) {
  return min + (max - min) * percentage;
}

export default lerp;
