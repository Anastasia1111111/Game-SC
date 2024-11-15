export function isMoveValid(
  positionX: number,
  positionY: number,
  height: number,
  width: number,
): boolean {
  return positionX >= 0 && positionX < 10 && positionY >= 0 && positionY < 10;
}
