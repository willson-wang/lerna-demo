import { getToken } from '@mykkty/cli-utils';
import CreateServer from '@mykkty/cli-serve';

console.log('getToken', getToken());

const serve = new CreateServer()

console.log('serve', serve.orgCode, serve.name, serve.token)

export default function foo():string  {
  return 'foo'
}

export function bar(): string {
  return 'bar'
}
