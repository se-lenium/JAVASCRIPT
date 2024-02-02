console.log(2 == 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 > 1);
console.log(2 < 1);// this type of comp is fine

console.log("2">= 1);
console.log("02" > 1);// comp between two different data types

console.log(null == 0);
console.log(null >= 0);
console.log(null > 0);// comp b/w two different values

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);// comp b/w two different data types
// always avoid these types of comp.

//===
console.log(null === 0);// === also checks data type of both the operands

//in js == operator and comparison operators like >= <= > < ,works differently