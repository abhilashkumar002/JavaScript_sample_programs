const readLineSync = require('readline-sync');

function characterCount(str){
  if(str.length < 1){
    console.log('Invalid input string');
  }
  else{
    let store = {};
    for (let i = 0; i < str.length; i++) {
      const element = str[i];
      if(store.hasOwnProperty(element)){      //hasOwnProperty returns true if object has element as key else false
        store[element] = store[element] + 1
      }
      else{
        store[element] = 1
      }
    }
    console.log(store)
  }
}

const input = readLineSync.question('Enter a string: ');
characterCount(input);