//Inheritance is the Main Pillar in Object oriented Programming
//one class can inherit/acquire the properties,Methods of another class
//The class which inherits the properties of other is known as subclass (derived class, child class) and 
//the class whose properties are inherited is known as superclass
const Person = require("./Test8")
class Pet extends Person
{
    get location()
    {
        return "Kondapur"
    }

    constructor(firstName,lastName)
    {
        //call parent class constructor
        super(firstName,lastName)
    }

}
let pet = new Pet("Rocky ","Smocky")
console.log(pet.fullName())
console.log(pet.location)
console.log(pet.age)
