import { getUid } from '@mykkty/cli-uid'

export function getToken(): string {
  return 'JKAl' + getUid();
}

export function getOrgcode(): string {
  return getUid();
}

export function getArr(): number[] {
  return [1, 2, 3]
}
