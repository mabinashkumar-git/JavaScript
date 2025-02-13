const greet = "Evening"    // when variable decalare as const we cannot reassign the value
//greet = "night"

if( 1 == 1)
{
    let greet = "Afternoon"
}

function add(a,b)
{
    let greet = "Morning"
    return a+b
}

let sum = add(2,3)
console.log("sum -:",sum)
console.log("greet -:", greet)

//do not have name =>Anyonymus function-- Function expressions

let sumOfIntegers = function(c,d)
{
    return c+d
}
console.log("sumOfIntegers(2,3) -:",sumOfIntegers(2,3))

let sumOfNumbers = (c,d)=> c + d
console.log("sumOfNumbers(2,3) -:",sumOfNumbers(2,3))
