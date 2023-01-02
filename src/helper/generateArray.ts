export function generateArray<T>(length: number, item?: T): (T | undefined)[] {
  return Array.from({ length }).map(() => item);
}
