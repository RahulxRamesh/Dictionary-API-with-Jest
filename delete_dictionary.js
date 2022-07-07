import axios from "axios";
const authToken = process.env.BASIC_AUTH;;
const headers = {
    'Content-Type': 'application/json',
    'Authorization': authToken
}

//Delete a Dictionary
 const deleteDictionary = async(id) =>{

    try{
 await axios.delete(`https://dictionary.iachieved.it/dictionary/${id}`, {
            headers: headers   
        });
    }catch(error){
        console.error(error);
    }
     
}
        
       // .then((res)=> res)
       // console.log(res.status);

export default deleteDictionary;