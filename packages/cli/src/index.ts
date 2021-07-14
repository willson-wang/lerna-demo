import { getToken } from '@demo/cli-utils';
import CreateServer from '@demo/cli-serve';

console.log('getToken', getToken());

const serve = new CreateServer()

console.log('serve', serve.orgCode, serve.name, serve.token)

export default function foo():string  {
  return 'foo'
}
