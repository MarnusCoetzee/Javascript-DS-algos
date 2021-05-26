// ABBBA = ABBBA = true
// ABCD = CDBA = false

// function palindrome(str) {
//   let reversed = str.split("").reduce((rev, char) => char + rev, "");
//   if (reversed === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
