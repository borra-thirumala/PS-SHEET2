// Medium:

// 1.	Write a program that takes a string, string should be of even length. Divide the string into two equals parts,
// check the number of vowels in both the parts of the string. If both parts of string have same number of vowels 
// then return true otherwise return false.

// a.	Testcase1	:  rebels
// b.	Output     	:  true
// c.	Explanation 	:  Given sring rebels divided into two parts, reb and els. In both parts vowels count is same 
// that is 1(e is presented in both the parts) so it returns true.

// d.	Testcase2	:  apples
// e.	Output     	:  true

// f.	Testcase1	:  mars
// g.	Output     	:  false


function countvowels(str){
    let count=0
    const vowels="aeiouAEIOU"
    for(i of str){
        if(vowels.includes(i)){
            count++
        }
    }
    return count;
}

function equalhalves(str){
    if(str.length%2!==0){
        return false
    }
    const mid=str.length/2
    const firsthalf=str.slice(0,mid)
    const secondhalf=str.slice(mid)
    
    const vowelsFirst = countvowels (firsthalf);
    const vowelsSecond = countvowels (secondhalf);
    
    return vowelsFirst === vowelsSecond
   
}

// Test cases
console.log(equalhalves("rebels")); // true
console.log(equalhalves("apples")); // true
console.log(equalhalves("mars"));   // false