import { getToken, getOrgcode } from '@mykkty/cli-utils';

class CreateServer {
  name: string
  token: string
  orgCode: string
  constructor() {
    this.token = getToken()
    this.orgCode = getOrgcode()
    this.name = 'jack'
  }
}

export default CreateServer
