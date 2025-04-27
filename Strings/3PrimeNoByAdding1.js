// 3.	Write a program that takes array of numbers as input, among the numbers in array, print the numbers 
// which forms a prime number by adding one to it. Print such numbers in the given array separated b spaces.

// a.	Testcase1	:  [ 7, 4, 7, 23, 10 ]
// b.	Output     	:  4 10
// c.	Explanation : In the given array of number [ 7, 4, 7, 23, 10 ] the numbers 4 and 10 by adding one to 
// these numbers, they formed prime number 5 and 11. So the output is 4 10.

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i] + 1)) {
            result.push(arr[i]);
        }
    }
    console.log(result.join(' '));
}

findNumbers([7, 4, 7, 23, 10]); 

