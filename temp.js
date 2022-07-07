var request = require('request');

const authToken = process.env.BASIC_AUTH;;
//const id = "8824996b-37ca-417c-b277-e1e196e37f5a";

import function deleteDict(id){

request({
  method: 'DELETE',
  url: `https://dictionary.iachieved.it/dictionary/${id}`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': authToken
  }}, function (error, response, body) {
  //console.log('Status:', response.statusCode);
  //console.log('Headers:', JSON.stringify(response.headers));
  //console.log('Response:', body);

  return response;
});


}


//deleteDict(id);