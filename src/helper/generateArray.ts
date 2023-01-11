export function generateArray<T>(length: number, item?: T): (T | {})[] {
  const myItem = item || {};
  return Array.from({ length }).map(() => myItem);
}
