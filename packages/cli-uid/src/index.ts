const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', '1', '2', '3', '4', '5', '6']

export function getUid(): string {
  return arr[Math.round((Math.random() * arr.length))]
}
