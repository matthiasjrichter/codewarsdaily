// https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript
// Input: Array of elements
// 
// ["h","o","l","a"]
// 
// Output: String with comma delimited elements of the array in th same order.
// 
// "h,o,l,a"

function printArray(array) {
    return array.join(",")
}

//alternative
const printArray = array => array.join(',')