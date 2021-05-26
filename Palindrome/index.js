// ABBBA = ABBBA = true
// ABCD = CDBA = false

function palindrome(str) {
  let reversed = str.split("").reduce((rev, char) => char + rev, "");
  if (reversed === str) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindrome;
