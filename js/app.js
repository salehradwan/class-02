'use strict';
let mark = 0;
let fastArray = [14, 15, 16];
alert('Welcome To My Web site');

let userName = prompt('What is your name?');
alert('Welcome To My Web site ' + userName);




const checkAge = function (age) {
  while (age !== 'yes' && age !== 'no' && age !== 'y' && age !== 'n') {
    age = prompt('Please Enter Yes or No or y or n \nAm I older than 30?').toLowerCase();
  }
  if (age === 'y' || age === 'yes') {
    alert('Incorrect!! I am a 29 years old');
    console.log('The correct answer NO');
  } else {
    console.log('The correct answer is ' + age + ' Great, i am a 29 years old');
    alert('Great, i am a 29 years old');
    mark++;
  }
}

function jokes(ans){
  while (ans !== 'yes' && ans !== 'no' && ans !== 'y' && ans !== 'n') {
    joke = prompt('Please Enter Yes or No or y or n \nDo I like jokes?').toLowerCase();
  }
  if (ans === 'y' || ans === 'yes') {
    console.log('The correct answer is ' + ans);
    alert('Great, Why do we tell actors to “break a leg?” Because every play has a cast');
    mark++;
  } else {
    alert('incorrect, knook knoo, i like the jokes.');
    console.log('The correct answer yes');
  
  } 
  return ans;
}


function family(ans){
  while (ans !== 'yes' && ans !== 'no' && ans !== 'y' && ans !== 'n') {
    brother = prompt('Please Enter Yes or No or y or n \nDo you think that I have more than two brothers?').toLowerCase();
  }
  if (ans === 'y' || ans === 'yes') {
    alert('incorrect, I have a one brother..');
    console.log('The correct answer NO');
  } else {
    console.log('The correct answer is ' + ans);
    alert('Great, i have a one brother');
    mark++;
  }
  return ans;
}

function programming(ans){
  while (ans !== 'yes' && ans !== 'no' && ans !== 'y' && ans !== 'n') {
    code = prompt('Please Enter Yes or No or y or n \nDo You think i like programming?').toLowerCase();
  }
  if (ans === 'y' || ans === 'yes') {
    console.log('The correct answer is ' + ans);
    alert('wonderful!! Coming to you on a flower road');
    mark++;
  } else {
    alert('Incorrect, I like the programming');
    console.log('The correct answer yes');
  }
  return ans;
}

function myAge(){
  let myAge = prompt('Can you guess my age?', 'Enter the number');
  let myAgeNum = parseInt(myAge);
  for (let i = 0; i < 4; i++) {
    if (myAgeNum === 29) {
      alert('Great, i am a 29 years old ');
      console.log('The correct answer is 29');
      mark++;
      break;
    } else if (myAgeNum > 29) {
      alert('too high');
      myAge = prompt('Re-guess my age?', 'Enter the number');
      myAgeNum = parseInt(myAge);
    } else if (myAgeNum < 29) {
      alert('too low');
      myAge = prompt('Re-guess my age?', 'Enter the number');
      myAgeNum = parseInt(myAge);
    }
    if (i === 4){
      alert('the correct answer is : 29');
    }
  }
  
}
function ramadan(){
  let c = 1;
  while (c < 6) {
    let fastQ = prompt('Can you guess how many hours a day we fast?', 'you have a 6 attempts to guess the correct answer. attemp: ' + c);
    let fastQuestion = parseInt(fastQ);
    for (let j = 0; j < fastArray.length; j++) {
      if (fastQuestion === fastArray[j]) {
        alert('Correct!!');
        mark++;
        c += 7;
        break;
      }
    }
    c++;
    if (c <= 6) {
      alert('Incorrect!!!');
    }
  
  }
  alert('The Correct answers are ' + fastArray);
}
function suggestion(ans){
  while (ans !== 'yes' && ans !== 'no' && ans !== 'y' && ans !== 'n') {
    offer = prompt('Please Enter Yes or No or y or n \ndo you have any suggestions for me?').toLowerCase();
  }
  if (ans === 'y') {
    // console.log('The correct answer is ' + answer);
    alert('Thank you. I will receive your suggestion on my personal accounts at the bottom of the page.');
  } else {
    // console.log('The correct answer is ' + answer);
    alert('Thanks for your patience, I wish you an enjoyable time.');
  }
  alert('Thank you a lot ' + userName + ' I wish you an enjoyable time.');
  
  alert('The mark is : ' + mark);
return ans;  
}

let older = prompt('Am I older than 30?', 'y/n').toLowerCase();
checkAge(older);

let joke = prompt('Do I like jokes?', 'y/n').toLowerCase();
jokes(joke);

let brother = prompt('Do you think that I have more than two brothers?', 'y/n').toLowerCase();
family(brother);

let code = prompt('Do You think i like programming?', 'y/n').toLowerCase();
programming(code);

myAge();
ramadan();
let offer = prompt('do you have any suggestions for me?', 'y/n').toLowerCase();
suggestion(offer);

// let myAge = prompt('Can you guess my age?', 'Enter the number');
// let myAgeNum = parseInt(myAge);
// // let age = 29;
// for (let i = 0; i < 3; i++) {
//   if (myAgeNum === 29) {
//     alert('Great, i am a 29 years old ');
//     console.log('The correct answer is 29');
//     mark++;
//     break;
//   } else if (myAgeNum > 29) {
//     alert('too high');
//     myAge = prompt('Re-guess my age?', 'Enter the number');
//     myAgeNum = parseInt(myAge);
//   } else if (myAgeNum < 29) {
//     alert('too low');
//     myAge = prompt('Re-guess my age?', 'Enter the number');
//     myAgeNum = parseInt(myAge);
//   }
// }
// alert('The correct answer is 29');
// console.log(myAgeNum);


// let y = 0;
// while(fastQuestion > fastArray[y] && y == 6){
//     fastQ = prompt('Re-guess how many hours a day we fast?');
//     fastQuestion = parseInt(fastQ);
//     y++;
// }







