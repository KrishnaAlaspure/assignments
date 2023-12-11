/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length != 0) {
    str = str.toLowerCase().replace(/[^a-z]/g, "");
    var str1 = str.split("").reverse().join("");
    var str2 = str.split("").join("");
    if (str1 == str2) {
      return true;
    } else {
      return false;
    }
  }
  if (str.length == 0) return true;
}

module.exports = isPalindrome;
