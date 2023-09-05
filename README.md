#### Example


import { urlEncoder,urlDecoder } from "encryptdecrypt-everytime/src";

const sampleData = [
		{ id: 1 }, 
		{ id: 2 }, 
		{ id: 3 }
	];
<br/>

const secretKey = "Some secret Key"
<br/>


<b>For encrypting the data :</b>

const encryptedResults = urlEncoder(secretKey,JSON.stringify(sampleData));

// Encoded Response
console.log(encryptedResults,"<<<<<<<<< encode response");


<b>For Decrypting the data :</b>

const decryptedResults = urlDecoder(secretKey,encryptedResults);

// Decoded Response
console.log(JSON.parse(decryptedResults),"<<<<<<<<< decode response");