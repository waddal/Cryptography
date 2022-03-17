const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

const users = [];

function signUp (email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64)

    const user = { email, password: `${salt}:${hashedPassword}` }

    users.push(user);

    return user;
}

function logIn (email, password) {
    const user = users.find(v => v.email === email);

    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        console.log('login success');
    } else {
        console.log('login failed');
    }
}

const email = 'salmon@scripts.com';
const password = 'fishscale2';

signUp(email, password);
logIn(email, password);