//This module is required to take input from user through console.
const readlineSync = require('readline-sync');

//This function takes a string as argument an check if it is a prime number.
const isStringPallindrom = (str) => { //This way of decleration of a function is called arrow function
  //First we check is string is there
  if(str.length > 0){
    let isNotPalindrom = false; //Used as a flag to store ststus
    let strLength = str.length; //Used to traverse from the last index of string
    let half = (str.length -1)/2; //Used to go till half of th emaximum index of string
    for(let i = 0; i <= half; i++){ //Iterate through the string till the middle index
      if(str[i] !== str[strLength -1 -i]){ //Compare two character on e from front and other from rear at same distance from respective end
        console.log(`${str} is not a palindrome.`); //If any pair mismatches, it is not a palindrome 
        isNotPalindrom = true; //set flag to true
        break; // break from loop no need to check further
      }
    }
    if(!isNotPalindrom){ //Reverse the boolean value to know if string is a palindriome or not
      console.log(`${str} is a palindrome.`);
    }
  }
  else{
    console.log('Not a proper input.') //If nothing is entered from console
  }
}

const inputString = readlineSync.question('Enter a string to check if it is a palindrome: '); //Take input from console
isStringPallindrom(inputString); //Call the function with user input as parameter


// We can also use build in string functions to check for pallindrome

// We split the string and store it in a list then reverse the list then join the list of character to get string
// const reversedString = inputString.split('').reverse().join(''); 
// if(inputString == reversedString){
//   console.log(`${inputString} is a palindrome.`);
// }
// else{
//   console.log(`${inputString} is not a palindrome.`);
// }