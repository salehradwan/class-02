'use strict';

function age(answer){
    if (answer === 'y') {
        alert('I am a 29 years old');
    } else {
        // console.log('The correct answer is ' + answer + ' Great, i am a 29 years old');
        alert('Great, i am a 29 years old');
    }
}

function jokes(answer){
    if (answer === 'y') {
        // console.log('The correct answer is ' + answer);
        alert('Why do we tell actors to “break a leg?” Because every play has a cast');
    } else {
        alert('knook knoo, i like the jokes.');
    }
}

function family(answer){
    if (answer === 'y') {
        alert('I have a one brother..');
    } else {
        // console.log('The correct answer is ' + answer);
        alert('you are right i have a one brother');
    }
}

function program(answer){
    if (answer === 'y') {
        // console.log('The correct answer is ' + answer);
        alert('wonderful!! Coming to you on a flower road');
    } else {
        alert('You can try it, sure you will love it');
    }
}

function suggestions(answer){
    if (answer === 'y') {
        // console.log('The correct answer is ' + answer);
        alert('Thank you. I will receive your suggestion on my personal accounts at the bottom of the page.');
    } else {
        // console.log('The correct answer is ' + answer);
        alert('Thanks for your patience, I wish you an enjoyable time.');
    }
}

alert('Welcome To My Web site');

let userName = prompt('What is your name?');
alert('Welcome To My Web site ' + userName);

let older = prompt('Am I older than 30?', 'y/n').toLowerCase();
age(older)
let joke = prompt('Do I like jokes?', 'y/n').toLowerCase();
jokes(joke);
let brother = prompt('Do you think that I have more than two brothers?', 'y/n').toLowerCase();
family(brother);
let code = prompt('Do You like programming?', 'y/n').toLowerCase();
program(code);
let offer = prompt('do you have any suggestions for me?', 'y/n').toLowerCase();
suggestions(offer);
alert('Thank you a lot ' + userName + ' I wish you an enjoyable time.');
