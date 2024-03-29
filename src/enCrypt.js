module.exports.urlEncoder = (salt,text) => {
    // const salt ="mysecretekey";
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
    const response = text.split('').map(textToChars).map(applySaltToChar).map(byteHex).join('');
    return response ;
}
