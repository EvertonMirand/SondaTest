export const getNextPosition = (position: number, array: number[]): number => {
  const nextPosition = position + 1;
  if (nextPosition >= array.length) {
    return 0;
  }
  return nextPosition;
};
