function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(reverseString("hello"));

function isPalindrome(str) {
  let reversed = reverseString(str);

  return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("raceacar"));
