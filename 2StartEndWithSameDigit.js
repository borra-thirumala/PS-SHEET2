// 2.Write a program that takes array of numbers as input, among the numbers in array, check how many numbers starts 
// with the same digit and ends with the same digits. Print the count of such kind of numbers in the given array.

// a.	Testcase1	:  [ 34, 88, 423, 121, 2382, 10]
// b.	Output     	:  3
// c.	Explanation : In the given array of number [ 34, 88, 423, 121, 2382, 10], the numbers 88, 121 and 2382 started
//  with same digit and ended with the same digit. The count is 3.

// d.	Testcase1	:  [ 102, 56, 42, 11, 64, 10]
// e.	Output     	:  1
// f.	Explanation : In the given array of number [ 34, 88, 423, 121, 2382, 10], the number 11started with same digit and ended 
// with the same digit. The count is 1.


function countStartEndWithSameDigit(arr){
    count=0
    for(num of arr){
        const str=num.toString();
        const firstdigit = str[0];
        const lastdigit = str[str.length-1]
        
        if(firstdigit===lastdigit){
            count++
        }
    }
    return count
    
}
console.log(countStartEndWithSameDigit([34, 88, 423, 121, 2382, 10]))
console.log(countStartEndWithSameDigit([102, 56, 42, 11, 64, 10]))