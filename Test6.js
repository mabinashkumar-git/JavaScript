//object is collection of properties

let person = {
    firstName:'Abinash ',
    lastName :'Mallick',
    age : 24,
    
    fullName : function()
    {
        console.log(this.firstName + this.lastName)
    }

}
console.log("person.fullName() ->", person.fullName())
console.log("person.lastName ->", person.lastName)
console.log("person['lastName'] ->", person['lastName'])

person.firstName = 'Abinash Kumar '
console.log("person.firstName ->", person.firstName)

person.gender = 'male'
console.log("person ->",person)

delete person.gender
console.log("person after deleting ->", person)
console.log('gender' in person)

//print all the values of the javascript object
for(let key in person)
{
    console.log("person[key] ->", person[key])
}

