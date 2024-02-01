let score = null;
//typeof function defines the type of variable
//typeof(null)= object
// NaN = Is a number
//method_1
//console.log(typeof score)
//method_2
//console.log( typeof(score))
//we can also forcibly change the type of variables from string to a number
//bool= if true and forcibly tyopecasted then comes 1 otherwise 0 for false
//null can be typecasted into 0
let valueInNumber = Number(score)
//console.log(typeof valueInNumber)

//console.log(valueInNumber)
//33=> 33
//33abc => NaN (not a number)
//true =>1 ;false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
 //console.log(booleanIsLoggedIn)

 // 1 => true 0 => false
 // empty => false "" => false
 //something apple banana name "aditya" => true

 let number = 33

 let statement = String(number)
 console.log(statement)
 console.log(typeof(statement))