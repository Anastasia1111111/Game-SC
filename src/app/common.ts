export function isMoveValid(
  positionX: number,
  positionY: number,
  height: number,
  width: number,
): boolean {
  return positionX >= 0 && positionX < height && positionY >= 0 && positionY < width;
}
