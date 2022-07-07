//Importing file that has the request function (.js is required due to use of Babel)
import createDictionary from "./create_dictionary.js";

describe('Test grouping for the Create a New Dictionary API', () => {

    test('Successful Create Dictionary API call should return status code 201 ', async () => {

        const result = await createDictionary('{}');
        console.log(result.data);
        expect(result.status).toBe(201); 

    });

    test('Successful Create Dictionary API call should return valid JSON result ', async () => {

        const result = await createDictionary('{}');
        
        const parseJson = () => {
            const json = JSON.stringify(result.data);
            JSON.parse(json);
        };

        expect(parseJson).not.toThrow();

    });

   


});