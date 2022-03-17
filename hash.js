const { createHash } = require('crypto');

// Create a string hash

function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

//compare two hashes

let password = 'salmon'
const hash1 = hash(password);
console.log(hash1);

password = 'salmon'
const hash2 = hash(password);
const match = hash1 === hash2

console.log(match ? 'good password' : 'bad password');
