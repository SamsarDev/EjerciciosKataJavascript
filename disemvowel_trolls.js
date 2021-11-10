/* 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
*/

/* 
const disemvowel = (str) => {
  const regexp = /[aeiou].* /i;
  while (regexp.test(str)) {
    let posVow = str.search(regexp);
    if (posVow >= 0) {
      let part1 = str.slice(0, posVow);
      let part2 = str.slice(posVow + 1, str.length);
      str = part1 + part2;
    }
  }
  return str;
};
*/

const disemvowel = (str) => str.replace(/[aeiou]/gi, "")
