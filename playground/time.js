const moment = require('moment');

// Jan 1st 1970 00:00:10 am

// const date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

const someTimestamp = moment().valueOf();
console.log(someTimestamp);

const createdAt = 1234
const date = moment(createdAt);
console.log(date.format('h:mm a'));
