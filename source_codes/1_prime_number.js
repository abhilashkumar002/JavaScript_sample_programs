const readlineSync = require('readline-sync');

const prime = readlineSync.questionInt('Please enter a positive integer to check if it is a prime number? ')

if(Number.isInteger(prime) && prime > -1){
  if(prime === 0 || prime === 1){
    console.log(`${prime} is neither a prime nor a composite number`);
  }
  else if(prime === 2){
    console.log('2 is a prime number');
  }
  else{
    let half = prime / 2;
    let isNotPrime = false;
    for(let i = 2; i <= half; i++){
      if( prime % i === 0){
        console.log(`${prime} is not a prime number`);
        isNotPrime = true;
        break;
      }
    }
    if(!isNotPrime){
      console.log(`${prime} is a prime number`)
    }
  }
}
else{
  console.log("The input value is not a positive integer")
}