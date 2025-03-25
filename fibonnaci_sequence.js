/*

Fibonacci Sequence

This is a function called fibonacci_sequence that takes in an integer n as its parameter 
and returns a list of the first n numbers in the Fibonacci sequence.

The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. 
The sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.

*/


function fibonacci_sequence(num){
    let arr = [0,1]
    for (let i = 2; i < num; i++){
        seq = arr[i-2] + arr[i-1] // sum of the last two numbers in the array
        arr.push(seq) // push the sum of the last two numbers in the array. E.g 1 can be pushed on first iteration 
    }
    return arr
}

console.log(fibonacci_sequence(5)) // the five just states the amount of times the sequence should run 