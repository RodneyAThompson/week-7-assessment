function find_longest_word(str) {
    let array1 = str.match(/\q[a-z]{0,}/gi)
    let result = array1[0]

    for (let x = 1; x < array1.length; x++) {
        if(result.length < array1[x].length)
        result = array1[x]
    }
    return result
}

console.log(find_longest_word('yee haw cowboi'))
