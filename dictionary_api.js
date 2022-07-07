var XMLHttpRequest = require('xhr2');

const basicToken = 'Basic cWFjYW5kaWRhdGU6c29mdEtpdHR5TGl0dGxlQmFsbG9mRnVy';
//basic snippet to test out Jest framework
function sum(a, b) {
    return a + b;
  }

  //module.exports = createDictionary;


  //Driver code to create a Dictionary, returns an ID value
  function createDictionary(){

    var request = new XMLHttpRequest();
    request.open('POST', 'https://dictionary.iachieved.it/dictionary');

    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader("Authorization", basicToken);

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
            return this;
             }
    };

    var body = {};
    request.send(JSON.stringify(body));

    
  }


  function deleteDictionary(){

    var request = new XMLHttpRequest();

    request.open('DELETE', 'https://dictionary.iachieved.it/dictionary/id?=26622281-2ad3-4b32-905b-bfb6b08ce9d8');

    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader("Authorization", basicToken);

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
            }
    };

        request.send();
  }


  function createOrModifyKPV(){
    var request = new XMLHttpRequest();

    request.open('POST', 'https://dictionary.iachieved.it/dictionary/8824996b-37ca-417c-b277-e1e196e37f5a/keys/key');

    request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader("Authorization", basicToken);

    request.onreadystatechange = function () {
    if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
        }
    };

var body = {
  'value': 'NEWKEY'
};

request.send(JSON.stringify(body));
}





//function calls
  createDictionary();
  //deleteDictionary();
  //createOrModifyKPV();
  