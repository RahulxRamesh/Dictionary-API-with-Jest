import createOrModKVP from "./keyvalue.js";


describe('Test grouping Key Value Pair various SUCCESS(200 response) input validations', () => {

 test('Successful key-value creation or modification should return status code 200 ', async () => {

    try{
    const result = await createOrModKVP('ice cream',{'value': 'vanilla bean'});
    expect(result.status).toBe(200);
    }catch(err){
        alert(err);
    }
});

test('Same key, different value ', async () => {

  
    const result = await createOrModKVP('ice cream',{'value': 'chocolate'});
    expect(result.status).toBe(200);
    
});

test('different key, different value ', async () => {

  
    const result = await createOrModKVP('candy',{'value': 'snickers'});
    expect(result.status).toBe(200);
    
});

test('special characters in the key field', async () => {

  
    const result = await createOrModKVP('google.com_catapult!@#%^&*()_+=-[{]}?.>,<`~',{'value': 'health'});
    expect(result.status).toBe(200);
    
});

test('special characters in the value field', async () => {

  
    const result = await createOrModKVP('language',{'value': 'python!@#%^&*()_+=-[{]}?.>,<`~'});
    expect(result.status).toBe(200);
    
});

test('special characters in both the key and value fields', async () => {

  
    const result = await createOrModKVP('companies!@#%^&*()_+=-[{]}?.>,<`~',{'value': 'IBM!@#%^&*()_+=-[{]}?.>,<`~'});
    expect(result.status).toBe(200);
    
});

});


describe('Test grouping Key Value Pair various FAILURE(404 response) input validations', () => {

    test('special character "/" in the key field', async () => {
        
        const result = await createOrModKVP('https://www.catapulthealth.com/why-we-do-what-we-do/',{'value': 'health'});
        expect(result).toBeUndefined();
        
    });


    test('special character "\" in the key field', async () => {
        
        const result = await createOrModKVP('https:\\www.catapulthealth.com\why-we-do-what-we-do',{'value': 'health'});
        expect(result).toBeUndefined();
        
    });


});