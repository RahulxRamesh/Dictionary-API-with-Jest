import axios from "axios";
require("dotenv").config();
const authToken = process.env.BASIC_AUTH;

//Create a Dictionary
const createDictionary = (body) =>
    axios
        .post('https://dictionary.iachieved.it/dictionary', JSON.stringify(body), {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': authToken
            }
        })
        .then((res) => res)
        .catch((err) => console.error(err));
        

        export default createDictionary; 



        





