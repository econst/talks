'use strict'

// given an array of numbers, multiply
// even numbers by a constant and print the result
var numbers = [3, 2, 8]
var constant = 2
function mul(a, b) {
  return a * b
}
function print(x) {
  console.log(x)
}
function isEven(x) {
  return x % 2 === 0
}
const byConstant = mul.bind(null, constant)
function compose(f, g) {
  return function(x) {
    return f(g(x))
  }
}
const mulAndPrint = compose(print, byConstant)
var k = 0
for (k = 0; k < numbers.length; k += 1) {
  if (isEven(numbers[k])) {
    mulAndPrint(numbers[k])
  }
}
