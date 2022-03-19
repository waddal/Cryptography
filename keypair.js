const { generateKeyPairSync } = require('crypto');
//RSA = Rivest-Shamir-Adleman, most common
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048, //length of your key in bits
    publicKeyEncoding: {
        type: 'spki', //recommended by Node.js docs
        format: 'pem', //PEM = privacy enhanced mail
    },
    privateKeyEncoding: {
        type: 'pkcs8', //recommended by Node.js docs
        format: 'pem',
        // cipher: 'aes-256-cbc',
        // passphrase: 'top-secret'
    },
});

console.log(publicKey)
console.log(privateKey);

module.exports = {
    privateKey, publicKey
}