# velaux-typescript-sdk
Typescript SDK for VelaUX

# SDK source code
source code of the SDK is located in ```typescript/``` directory.

The typescript SDK is generated using OpenAPI generator from the ```swagger.json``` file in the ```velaux``` repo. The ```swagger.json``` file is attached in this repository for reference. It defines the endpoints and requests/responses formats for the velaUX APIs.

# Usage
a ```Configuration``` object is needed to contain information about the requests

After creating the ```Configuration``` object, To use most of the SDK features, an access token is needed. To get an access token, log in and the response will contain access token. Then, set the access token in the ```Configuration``` object mentioned above.

Then, most of the SDK functionalities can be used after setting the access token, expected input formats for SDK functions can be found in the ```typescript/apis``` direcotry and tracing the type definition of the paramters of desired SDK function. Example code:


```
const configuration = new Configuration({
    basePath: 'http://127.0.0.1:8000',
})

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

