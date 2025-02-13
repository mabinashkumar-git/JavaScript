class Person
{
    age = 31
   
    get location()
    {
        return "Hyderabad"
    }

    //constructor is method which executes by default when you create object of the class
    constructor(firstName,lastName)
    {
        this.firstName =firstName
        this.lastName = lastName
    }

    //methods
    fullName()
    {
        console.log(this.firstName+this.lastName)
    }
    
}

let person = new Person("Abinash ","Mallick")
let person1 = new Person("Aakash ","Bhushan")
console.log(person.age)
console.log(person.location)
console.log(person.fullName())
console.log(person1.fullName())
