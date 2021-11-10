/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

const isIsogram = (str) => {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++ ) {
      let letter = str.charAt(i), nStr = str.slice(i+1);
      if (nStr.includes(letter)) {
        return false;
      }
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))
