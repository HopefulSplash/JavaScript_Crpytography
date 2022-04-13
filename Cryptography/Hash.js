const { match } = require('assert');
const {createHash} = require('crypto');

function hash(input){
    return createHash('sha256').update(input).digest('hex');
}

let password = 'hello world';
const hash1 = hash(password);
console.log(hash1);

password = 'hello world!';
const hash2 = hash(password);
console.log(hash2);

console.log(match ? 'Good Password' : 'Passwords Do Not Match')

