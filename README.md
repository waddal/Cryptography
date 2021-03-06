# Cryptography
In this repo we explore the different concepts of cryptography

## What is cryptography?
Cryptography is the science of creating secrets.

### Concepts

1. The Hash 
Start with an input and pass it off to a hashing function. This function returns a fixed length value. 
A 'salt' is a random value added to the input before its hashed, making the value it returns much harder to guess.

2. Hash-based Message Authentication Code (HMAC)
A hash that also requires a password. the only person who can create the same hash signature must also have corresponding password or key. 
e.g. JSON web token (JWT). When a user logs in on a trusted server, it generates a token with its key. Then the client/server can pass it back and forth.
The server can trust it cause only someone with the secret key could have generated that hash signature.

3. Symmetric Encryption
What is encryption? we take a message (input), scramble the bytes(encryption w/key) to make it unreadable(cypher text), provide key to allow someone to read the message(decrypt w/key).
Cypher is randomized typically after each encryption. 
Limitation: both sender and reciever have to share a password.

4. Asymmetric Encryption (Public-key cryptosystem)
Instead of one key, it uses two keys that are linked. Private key is kept secret, Public key can be shared. 

5. Signing
What is a digital signature? Sender of a message with use a private key to sign a hash of the original message. 
The private key guarantees authenticity and the hash guarantees the message cant be tampered with because it would produce an entirely different signature. 
The recipient can then use the public key to validate the authenticity of the message. 