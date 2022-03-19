const { createCipherIv, randomBytes, createCipheriv, createDecipheriv } = require('crypto');
//IV = Initialization Vector

//Cipher

const message = 'i love burritos';
const key = randomBytes(32);
//IV prevents identical sequences of text. Randomizes output when encrypted 
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);

//Encrypt

const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
console.log('encrypted: ', encryptedMessage);

//Decrypt

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf8') + decipher.final('utf8');

console.log('decrypted: ', decryptedMessage);