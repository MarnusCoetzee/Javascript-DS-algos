// Common string questions
// What is the most common character in the string?
// Does string A have the same characters as String B? ABBA === ABBA
// Does the given string have any repeated characters in it?
// For of iterates through iterable items (string/array)
// For in iterates through objects
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
