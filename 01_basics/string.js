const name = "Aditya"
const repoCount = 30

// console.log(name + repoCount + "value");

//string Interpolation => 
//console.log(`myself ${name} and my repo count is ${repoCount}`);

// a way of declaring string 
const gameName = new String('Aditya Dhanraj')
// strings are like objects in js.
//and have key pair values starting from 0 to n-1.
//it is diiferent from index as it is not an array.

//accessing via keypair value
 console.log(gameName[0]);// A
 //way of seeing string as an object
 console.log(gameName.__proto__);//{}

 //using few methods
 //methods can be acessed by putting a "." after the targetted variable name
 //like

 console.log(gameName.length);//14
 console.log(gameName.toUpperCase());//ADITYA DHANRAJ 

 console.log(gameName.charAt(4));//y
 console.log(gameName.indexOf('y'));//4

 const newString = gameName.substring(0,3)//[0,3)
 //it does not includes last element , it excludes last element 
 //only [0,2] key pair value will get stored in newString
 console.log(newString);//Adi

 const oneString = gameName.slice(-4,6)
console.log(oneString);

const newString1 = "     ADITYA.     "
console.log(newString1);
console.log(newString1.trim());

const url = "https://aditya%20dhanraj.com"
console.log(url.replace('%20',' '))// it replaces but not alters the original value
console.log(url);//stilll original %20 is there in the url

console.log(url.includes('Aditya'));//false as ADITYA is there

console.log(gameName.split(' '));// two arrays splited by ' '.


