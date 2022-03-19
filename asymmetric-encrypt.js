const { publicEncrypt, privateDecrypt } = require("crypto");

const { publicKey, privateKey } = require("./keypair");

const message = "the water is hot!";

//drop in mailbox
const encryptedData = publicEncrypt(
    publicKey, 
    Buffer.from(message)
);

//unlock mailbox
const decryptedData = privateDecrypt(
    privateKey,
    encryptedData,
);

console.log(decryptedData.toString('utf-8'));