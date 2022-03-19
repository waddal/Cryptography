const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = 'this data must be signed';

//Sign
//rsa cryptosystem with sha for hashing
const signer = createSign('rsa-sha256');

signer.update(message);
//create actual signature with private key. attach to original message. 
const signature = signer.sign(privateKey, 'hex');


//Verify
const verifier = createVerify('rsa-sha256');

verifier.update(message);
//verify signature with senders public key
const isVerified = verifier.verify(publicKey, signature, 'hex');
//if signature is forged, or message changed, the verifier will fail
console.log(isVerified);