export function isMoveValid(positionX: number, positionY: number): boolean {
  return positionX >= 0 && positionX < 10 && positionY >= 0 && positionY < 10;
}
