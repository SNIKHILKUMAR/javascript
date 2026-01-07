const user={
    name:"alice",
    age:30,

    massagepass : function(){
        console.log(`${this.name} is sending a massage`)     //browser ke andar global object jo hai vo window object
        console.log(this);
        
    }
}
console.log(this);

user.massagepass();
