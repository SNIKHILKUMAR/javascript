//primitive 
// undefined, null , string, bollean, number , symbol, bigInt

// non primitive 
// function , object , array 

let one="hello";
let two=one;
two="world";                    //stack

console.log(one);
console.log(two);


let obj1= {
     name:"charry",
     age:22
}
let obj2=obj1;
obj2.age=23;                      //heap

console.log(obj1.age);
console.log(obj2.age);
