function capitalize(string) {
    let result = string.split('')
    result[0] = result[0].toUpperCase()
    return result.join('')    
}
// console.log(capitalize('hello'))

function reverseString (string) {
    return string.split('').reverse().join('')
}
// console.log(reverseString('hello'))

const calculator = {
     add(a, b) {
        return a + b
     },
    subtract(a, b) {
        return a - b
    },
    divide(a, b) {
        return a / b
    },
    multiply(a, b) {
        return a * b
    }
}
// console.log(calculator.add(3,56))

function caesarCipher(string, shift) {
    return string
        .split('')
        .map( (letter) => {
            if (letter.match(/[a-z]/)) { // 97 to 122
                return String.fromCharCode(((letter.charCodeAt(0) - 97 + shift) % 26) + 97)
                
            } else if (letter.match(/[A-Z]/)) { // 65 to 90    
                return String.fromCharCode(((letter.charCodeAt(0) - 65 + shift) % 26) + 65)
            }
            return letter
        })
        .join('')
}
// console.log(caesarCipher('This is just a taste.', 16), 'Jxyi yi zkij q jqiju.')

const analyzeArray = (array) => {
    const length = array.length
    const average = array.reduce( (acc, curr) => acc + curr, 0) / length
    const min  = (array.slice().sort())[0]
    const max  = (array.slice().sort())[length-1]
    return {average, min, max, length}    
}
// console.log(analyzeArray([1,8,3,4,2,6]))

// export default capitalize

module.exports = { capitalize, calculator, reverseString, caesarCipher, analyzeArray }
