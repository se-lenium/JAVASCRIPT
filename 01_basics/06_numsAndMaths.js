// const score =23

// const balance = new Number(23)//using objects
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

// const amt = 56.9856
// console.log(amt.toFixed(2))//restricts the digits upto 2 decimal places

// console.log(amt.toPrecision(3));

// const hundreds = 10000000000
// console.log(hundreds.toLocaleString('en-IN'));

//~~~~~~~~~~~~~~~~~~~~~~~~~MATHS~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(Math);//Object [Math] {}
console.log(Math.abs(-5));//5
console.log(Math.round(4.56));//round-off
console.log(Math.ceil(4.2));// 5 highest integer
console.log(Math.floor(4.9));//4 lowest integer
console.log(Math.min(3,5,7,2,10));// returns lowest number i.e 2
console.log(Math.max(3,5,7,2,10));// returns highest number i.e 10

//"Random" Method gives a number b/w 0 and 1.
console.log(Math.random())//0.70718393064086
console.log((Math.random()*10)+1);//2.1433531038554756 b/w 1 and 10
//now if want ceil value then
console.log(Math.round((Math.random()*10)+1));// 1-10 any integer will come

const min = 10
const max = 20
//*(max-min+1)+min
console.log(Math.round((Math.random()*(max-min+1))+min));
// will give random number b/w 10 and 20
