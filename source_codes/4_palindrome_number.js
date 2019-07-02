const readlineSync = require('readline-sync');

const isNumberPallindrome = (integer) =>{
  let inputNumber = integer;
  let reverseNumber = 0;
  while(inputNumber > 0){
    remainder = inputNumber % 10; // Grab the last digit
    //Multiply the number to take current trailing digit to tens place and add the last digit grabbed.
    reverseNumber = (reverseNumber * 10) + remainder; 
    inputNumber = Math.floor(inputNumber/10); //For integer quotient value. Simple division gives float value.
  }
  if(integer == reverseNumber){
    console.log(`${integer} is a palindrome.`)
  }
  else{
    console.log(`${integer} is not a palindrome.`)
  }
}

const inputInteger = readlineSync.questionInt('Enter an integer to check if it is a palindrome: ');
isNumberPallindrome(inputInteger);