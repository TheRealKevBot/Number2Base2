// Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. 
// To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

// Going from right to left, the value of the most right bit is 1, now from that 
// every bit to the left will be x2 the value, value of an 8 bit binary 
// numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).


// https://edabit.com/challenge/3kcrnpHk7krNZdnKK


function binary(decimal) {
    let answer = decimal.toString(2) // The number will show as a binary string value
    return answer
} 


console.log(binary(100), "1100100")
console.log(binary(1), "1")
console.log(binary(0), "0")
console.log(binary(69), "1000101")
console.log(binary(1023), "1111111111")
console.log(binary(511), "111111111")
console.log(binary(666), "1010011010")
console.log(binary(123), "1111011")