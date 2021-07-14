const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

export function getUid(): string {
  return arr[Math.round((Math.random() * arr.length))]
}
