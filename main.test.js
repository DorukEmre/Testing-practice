// import capitalize from './main.js'
const { capitalize, calculator, reverseString, caesarCipher, analyzeArray } = require('./main')

it('capitalize', () => {
    expect(capitalize('string')).toBe('String')
})

it('reverseString', () => {
    expect(reverseString('string')).toBe('gnirts')
})

it('calculator', () => {
    expect(calculator.add(3,56)).toBe(59),
    expect(calculator.subtract(3,56)).toBe(-53),
    expect(calculator.divide(57,3)).toBe(19),
    expect(calculator.multiply(3,56)).toBe(168)
})

it('caesarCipher', () => {
    expect(caesarCipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf'),
    expect(caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs'),
    expect(caesarCipher('This is just a taste.', 16)).toBe('Jxyi yi zkij q jqiju.')
})

it('analyzeArray', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
})