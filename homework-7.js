// #6

import { userComments } from './comments.js';

// #2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(number => number >= 5);
console.log(filteredNumbers);

// #3

const kitchenAppliances = ['spoon', 'mug', 'plate', 'fork', 'knife'];
const checkAppliances = kitchenAppliances.includes('spoon');
console.log(checkAppliances);

// #4

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reverseArray = numbersArray.toReversed();
console.log(reverseArray);

// #7

const filteredByEmailCom = userComments.filter(userComm => userComm.email.includes('.com'));
console.log(filteredByEmailCom);

// #8

const filteredById = userComments.map(userComm => ({
  ...userComm,
  postId: userComm.id <= 5 ? 2 : 1
}));
console.log(filteredById)

// #9

const nameIdArr = userComments.map(({ id, name }) => {{ id, name };
});

// #10

const checkValidity = userComments.map(userComm => ({
  ...userComm,
  isInvalid: userComm.body.length > 180
}));
console.log(checkValidity);

// #11

const getEmailsArr = userComments.reduce((accumulator, email) => {
  return email;
}, 0);
console.log(getEmailsArr);



const getEmails = userComments.reduce((acc, comment) => 
  [...acc, comment.email], []);
console.log(getEmails);

// #12

const emailsStr = getEmailsArr.toString();

console.log(emailsStr);