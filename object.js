//object literal

// symbol key 

const sym= Symbol("key")

const User = {
    name: "nikhil",
    age: 21,
    [sym]: "mykey",
    email: "nikhilsingh7337@gamil.com",
    isLogged: false,

}
// console.log(User.name)
// console.log(User.age)
// console.log(User.email)
// console.log(User["email"])

// User.email= "nikhilsingh@google.com"
// Object.freeze(User)
// User.email= "nikhilsingh@chatgpt.com"
// console.log(User[sym])
// console.log(User)

// User.student= function(){
//     // console.log("hello user ")
// }
// User.student1= function(){
//     // console.log(`hello user, ${this.name}`)
// }
// console.log(User.student1())

const regular= {
    email: " nikhilsingh7337@gmail.com",
    fullname:{
        username:{
            fullname:"NIKHIL",
            lastname: " kumar"
        }
    }
}
// console.log(regular.fullname.username)

const obj1= {1:"a",2:"b"}
const obj2= {3:"a",4:"b"}
 
// const obj3= Object.assign({},obj1,obj2)  //target,source
 const obj3 = {...obj1 , ...obj2}
// console.log(obj3)

console.log(User)
console.log(Object.keys(User))
console.log(Object.values(User))
console.log(Object.entries(User))
