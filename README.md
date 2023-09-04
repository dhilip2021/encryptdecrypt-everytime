-----------

import  { urlEncoder,urlDecoder } from "encryptdecrypt-everytime/src";



const sampleData = {
    id : 1,
    name : "David",
    age : 2
}
<br/>
const secretKey = "Some secret Key"

<b>For encrypting the data :</b>

const encryptedData =  urlEncoder(secretKey,JSON.stringify(sampleData));

Note : Input should be in the form of string;


<b>For decrypting the data :</b>

let decryptedData = urlDecoder(secretKey,encryptedData)

const decryptedData = JSON.parse(decryptedData)









