/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE

let str = 'apple'

var countLetters = str.split('').reduce((allLetters, letter) => {
  letter in allLetters ? allLetters[letter]++ : allLetters[letter] = 1
  return allLetters
}, {})
countLetters

// or
var result = str.split('').reduce((newObj, el) => {
  newObj[el] = ++newObj[el] || 1
  return newObj
}, {});
result

// or
// const countLetters = (str) => {
//   let newObj = {}
//   let splStr = str.split('');
//   for (let i = 0; i < splStr.length; i++) {
//     if(splStr[i] in newObj) { newObj[splStr[i]] +=1 }
//     else { newObj[splStr[i]] = 1 }
//     return newObj
//   }
// }
// countLetters('apple')



