const readlineSync = require('readline-sync');

function isLeapYear(year){
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

const year = readlineSync.questionInt('Please enter a year. ');

if(Number.isInteger(year) && year > -1){
  if(isLeapYear(year)){
    console.log(`${year} is a leap year.`);
  }
  else{
    console.log(`${year} is not a leap year.`)
  }
}
else{
  console.log('Enter a valid year.')
}