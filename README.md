#### Example
```javascript

import { urlEncoder,urlDecoder } from "encryptdecrypt-everytime/src";

const sampleData = [
		{ id: 1 }, 
		{ id: 2 }, 
		{ id: 3 }
	];
const secretKey = "Some secret Key";


// For encrypting the method
const encryptedResults = urlEncoder(secretKey,JSON.stringify(sampleData));

// Encoded Response
console.log(encryptedResults,"<<<<<<<<< encode response");


// For Decrypting the method 
const decryptedResults = urlDecoder(secretKey,encryptedResults);

// Decoded Response
console.log(JSON.parse(decryptedResults),"<<<<<<<<< decode response");

```