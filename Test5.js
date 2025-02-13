const Person = require('./Test8')
let day = 'tuesday '
console.log("day.length -:",day.length)  //8

let subDay = day.slice(0,4)
console.log("subDay -:",subDay)
console.log("day[1] -:",day[1]) //u
//tue   day 
let splitDay = day.split("s")
console.log("splitDay -:",splitDay)
console.log("splitDay[1].length ->",splitDay[1].length)
console.log("splitDay[1].trim().length ->",splitDay[1].trim().length)

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log("diff ->",diff)
diff.toString()
console.log("diff.toString() ->",diff.toString())

let newQuote = day + "is Funday day"
console.log("newQuote ->", newQuote)

let val = newQuote.indexOf("day",5)
console.log("val ->",val)           //tuesday is Funday day

let count = 0
let value = newQuote.indexOf("day")
while(value!== -1)
{
    count++ //2
    value = newQuote.indexOf("day", value + 1)

}
console.log("count ->",count)

// imported from basics8.js
let person = new Person("Chris ","Edward")
console.log("person.fullName() ->", person.fullName())
