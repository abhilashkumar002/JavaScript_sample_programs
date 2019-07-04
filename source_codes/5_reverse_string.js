const readlineSync = require('readline-sync');

const reverseString = (str) => {
  if(str.length > 0){
    let reversedString = '';
    for(let i=str.length - 1; i >=0; i--){    // Time complexity: O(n)
      reversedString += str[i];
    }
    return reversedString;
  }
  else{
    return null;
  }
}

function replaceAt(index, character, charSeq){
  return charSeq.substr(0,index) + character + charSeq.substr(index+1);
}

const reverseString2 = (str1) => {
  let str = str1;
  if(str.length > 0){
    let len = str.length;
    let half = (len - 1)/2;
    for(let i = 0; i <= half; i++){         // Time complexity: O(n/2)
      let temporary = str[i];
      str = replaceAt(i, str[len - 1 -i], str);
      str = replaceAt(len - 1 -i, temporary, str);
    }
    return str;
  }
  else{
    return null;
  }
}

const input = readlineSync.question('Enter a string: ');
console.log(reverseString(input));
console.log(reverseString2(input));