module.exports = class Person
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
