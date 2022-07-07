I used:
-babel [allows backwards compatibilty of imports/requires so I can use async calls with axios]
-axios [used to make https requests from node js, resolves issues with fetch that Jest has]
-dotenv to use a global environment variables file

-importing regenerator-runtime in setupTests.js allows me to use async await in test calls

using node.js and Jest framework for testing

package.json setup as following
{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "setupFiles": [
      "<rootDir>/create_dictionary.js"
    ]
  },
  "dependencies": {
    "axios": "^0.27.2",
    "node-fetch": "^3.2.6",
    "request": "^2.88.2",
    "xhr2": "^0.2.1"
  },
  "name": "catapult-health",
  "version": "1.0.0",
  "main": "dictionary_api.js",
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@babel/cli": "^7.18.6",
    "@babel/core": "^7.18.6",
    "@babel/preset-env": "^7.18.6",
    "@babel/preset-react": "^7.18.6"
  }
}


I used a .env file to hold the Basic Auth key, this repository has the key ommited in the .env file.

I decided to make seperate .test.js files for each API and create describe() suites to group cases

I chose to perform a series of status code return validations as well as input validations for the key-value pair API,
I had some trouble with the delete dictionary API, so I tried out passing a mock delete request that would mock a successful call.

Between the documentation for the dictionary API and actual returned status codes I noticed that the
delete API returns 204 no content rather than the 200 accepted response listed in the API documentation.

I also noticed that the dictionary is not necessarily deleted as it still exists with its keys and values
when passed through the "Get all keys API"
