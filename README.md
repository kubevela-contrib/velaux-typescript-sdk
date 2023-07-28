# velaux-typescript-sdk
Typescript SDK for VelaUX

# About This Repo
source code of the SDK is located in ```typescript/``` directory.

The typescript SDK is generated using OpenAPI generator from the [```swagger.json``` file](https://github.com/kubevela/velaux/blob/main/docs/apidoc/swagger.json) in the ```velaux``` repo.

Example code can be found in the ```examples/``` directory, where a Jest test is used to test the basic operations of ```application```, ```target```, ```env```, and ```project``` of the SDK.

# Usage
a ```Configuration``` object is needed to contain information about the requests

After creating the ```Configuration``` object, To use most of the SDK features, an access token is needed. To get an access token, log in and the response will contain access token. Then, set the ```access_token``` field in the ```Configuration``` object mentioned above.

Then, most of the SDK functionalities can be used after setting the access token, expected input formats for SDK functions can be found in the ```typescript/apis``` direcotry and tracing the type definition of the paramters of desired SDK function.

Example code to log in and list users:


```typescript
import { Configuration } from './typescript/runtime';
import { AuthenticationApi, LoginRequest } from './typescript/AuthenticationApi';
import { UsersApi } from './typescript/UsersApi';




const configuration = new Configuration({
    basePath: 'http://127.0.0.1:8000',
})

const authAPI = new AuthenticationApi(configuration)
const userAPI = new UsersApi(configuration)

const loginRequestParam: LoginRequest = {
    body: {
        "username": "admin",
        "password": "VelaUX12345"
    }
}

const loginRes = await authAPI.logi(loginRequestParam);
configuration.accessToken = loginRes.accessToken;
const listUsersRes = await userAPI.listUser();
```

Another example to create an application. this example creates an application called ```testapplication``` among with a basic component

```typescript
import { Configuration } from './typescript/runtime';
import { AuthenticationApi, LoginRequest } from './typescript/AuthenticationApi';
import { UsersApi } from './typescript/UsersApi';




const configuration = new Configuration({
    basePath: 'http://127.0.0.1:8000',
})
const authAPI = new AuthenticationApi(configuration)
const userAPI = new UsersApi(configuration)
const applicationAPI = new ApplicationApi(configuration)


const loginRequestParam: LoginRequest = {
    body: {
        "username": "admin",
        "password": "VelaUX12345"
    }
}


const loginRes = await authAPI.logi(loginRequestParam);
configuration.accessToken = loginRes.accessToken;

const req = {
    "body": {
    "name": 'testapplication',  // has to be all lower case
    "project": 'default',
    "component": {
        "name": 'express-server',
        "componentType": 'webservice',
    },
    "icon": 'https://www.svgrepo.com/show/513758/bookmark-check.svg',
    }
}
const res = await applicationAPI.createApplication(req)
console.log(res)


```

