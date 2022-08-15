function isPalindrome(word){
  // Write your algorithm here
    //return true if string is a palindrome (mom==>mom) or false
   const reverseWord = word.toLowerCase().split('').reverse().join('')
   return reverseWord === word ? true : false


}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
