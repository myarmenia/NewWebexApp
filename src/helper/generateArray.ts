export function generateArray<T>(length: number, item?: T) {
  return Array.from({ length }).map(() => (item ? item : {}));
}
