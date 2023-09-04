module.exports.urlDecoder = (salt,encoded) => {
    // const salt ="mysecretekey";
    try{
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

    let response = encoded.match(/.{1,2}/g).map(hex => parseInt(hex, 16))
    .map(applySaltToChar)
    .map(charCode => String.fromCharCode(charCode))
    .join('');
    return response;
    }catch(err)
    {
      return {error : err,message : "Invalid Secret Key"}
    }
    
    
}
