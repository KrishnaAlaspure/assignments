/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLowerCase().split("");
  var c = 0;
  if (str.length != 0) {
    for (var i = 0; i < str.length; i++) {
      if (
        (str[i] == "a") |
        (str[i] == "i") |
        (str[i] == "e") |
        (str[i] == "o") |
        (str[i] == "u")
      ) {
        c += 1;
      }
    }
    return c;
  } else {
    return 0;
  }
  // Your code here
}

module.exports = countVowels;
