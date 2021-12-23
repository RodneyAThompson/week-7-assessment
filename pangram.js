alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')

const isPangram = (str) => {
    str = str.toLowerCase()
    return alphabets.every(x => str.includes(x))
}

// console.log(isPangram('is this a pangram'))
console.log(isPangram('abcde fghijk lmnopqrs tuv wxyz'))

// Im guessing this has a runtime of O(n)