import axios from "axios";
const authToken = process.env.BASIC_AUTH;;

//Create or Modify a key value pair

const createOrModKVP = (keyName, body) =>
    axios
        .post(`https://dictionary.iachieved.it/dictionary/8824996b-37ca-417c-b277-e1e196e37f5a/keys/${keyName}`, body, {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': authToken
            }
        })
        .then((res) => res)
        .catch((err) => console.error(err));
        

        export default createOrModKVP; 






        





