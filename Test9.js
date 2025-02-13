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
