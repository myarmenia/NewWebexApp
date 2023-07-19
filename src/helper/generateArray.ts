export function generateArray<T extends Object = Object>(
  length: number,
  item: T
): T[] {
  const myItem = item || {};
  return Array.from({length}).map(() => myItem);
}
