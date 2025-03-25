Fibonacci_sequence challenge

The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. 
The sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.

Pseudo code

The seq variable is the sum of the previous two numbers in the array.
For example, if the array is [0,1], the next number in the sequence would be 0 + 1 = 1.
The next number in the sequence would be 1 + 1 = 2.

arr[i-1] and arr[i-2] makes the last two in the array. 

arr.push(seq) adds the sum of the last number to the array.
new array would be [0,1,1] then the next iteration happens.
    
