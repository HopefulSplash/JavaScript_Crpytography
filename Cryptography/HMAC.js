const {createHmac} = require('crypto');

const key = 'ThisIsThekey';
const message = 'This Is The Message!';

const hmac = createHmac('sha256', key).update(message).digest('hex');

console.log(hmac);

const key2 = 'ThisIsTheOtherkey';
const hmac2 = createHmac('sha256', key2).update(message).digest('hex');

console.log(hmac2);


