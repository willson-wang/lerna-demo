import { getUid } from '@mykkty/cli-uid'

export function getToken(): string {
  return 'JKAl' + getUid();
}

export function getOrgcode(): string {
  return getUid();
}
