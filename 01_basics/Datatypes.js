//on the basis of how data gets stored in the memory and further accessed 
//from the memory. we classify the data types in two types :--😁

//1.primitive

// 7 types ; SS NN BB U 😌
// String,Symbol. Number,Null. Boolean,BigInt. Undefined

// let checkString = "Aditya⚡️"
// console.log(typeof(checkString));//string

// let checkNull = null
// console.log(typeof checkNull);//object

// let checkBoolean = true
// console.log(typeof checkBoolean);//boolean

// let checkUndefined = undefined
// console.log(typeof checkUndefined);//undefined

//2. REFERENCE (non-primitive)

// arrays, objects, functions
//return type when checked by typeof fun is objects for
//all reference type.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MEMORY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1.Stack => PRIMITIVE 
// On copying copy gets allocated not reference value.

// let name = "Aditya"

// let initiatedName = name
// initiatedName = "Anand Vrindavana Das"

//  console.log(name);//name is still Aditya
//  console.log(initiatedName);// but now initiatedName is Anand Vrindavana Das


//2. Heap => REFERENCE 
//On copying the original copy gets allocated or reference gets passed
//not copy of it..

let id = {
    name : "Aditya", // " , " is very important in b/w the objects elements  
    add : "Bhagalpur"
}

 let initiatedId = id

 initiatedId.name = "Anand Vrindavana Das"

 console.log(id.name);// now this name also get changed from Aditya to Anand Vrindavana Das
console.log(initiatedId.name);// get changed to initiatedName




