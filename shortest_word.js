/* 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

const paragraph = 'bitcoin take over the world maybe who knows perhaps'

const findShorts = (s) => {
    const arr = s.split(' ')

    const minWord = s.split(' ').reduce((acc, cur) => {
        return acc.length < cur.length ? acc : cur
    })

    return minWord.length
}


console.log(findShorts(paragraph));
