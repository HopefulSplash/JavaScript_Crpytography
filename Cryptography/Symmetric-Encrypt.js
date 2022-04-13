const {createCipheriv, randomBytes, createDecipheriv} = require('crypto');
const { homedir } = require('os');

const message = 'Secret Message';
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);

const encrpytedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');

console.log(encrpytedMessage);

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encrpytedMessage, 'hex', 'utf-8') + decipher.final('utf-8');

console.log(decryptedMessage);
