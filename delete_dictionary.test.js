//import { del } from "request";
//import deleteDict from "./temp.js";

//import deleteDictionary from "./delete_dictionary.js";
import axios from "axios";

jest.mock("axios", () => ({
...jest.requireActual("axios"),
delete: jest.fn(),
}));


 test('Successful Delete Dictionary API call should return status code 204 ', async () => {

    const id = "8824996b-37ca-417c-b277-e1e196e37f5a";
        //const result = await deleteDictionary;
        //console.log(result.data);
        //expect(result).toBe(204); 

      //const result = await deleteDictionary(id);

        /*await expect(axios.delete).toHaveBeenCalledWith(
            `https://dictionary.iachieved.it/dictionary/${id}`
        );*/

            const result = await expect(axios.delete);

            //console.log(result.statusCode);

    });