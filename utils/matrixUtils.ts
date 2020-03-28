export function generateEmptyMatrix(n: number, m: number) {
  return Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
}
