var marks = Array(6)
var marks = new Array(20,40,35,12,37,100)

var marks =[20,40,35,12,37,100]
subMarks = marks.slice(2,5)
console.log("subMarks -:", subMarks)
console.log("marks[2] -:", marks[2]) //35

marks[3] = 14
console.log("marks -:",marks) //[20,40,35,14,37,100]
console.log("marks.length -:",marks.length) //6

marks.push(65)
console.log("marks pushed -:",marks) //[20,40,35,14,37,100,65]

marks.pop()//[20,40,35,14,37,100]
console.log("pop -:", marks)

marks.unshift(12)                     //add to beginning of the array
console.log("unshift -:", marks)

console.log("marks.indexOf(100) -:",marks.indexOf(100))
console.log("indexOf -:", marks)
//120 in the array
console.log("marks.includes(120) -:", marks.includes(120))
console.log("index -:", marks)

var sum =0
for(let i =0;i<marks.length;i++)
{
    //console.log(marks[i])
    sum = sum + marks[i] //32+40
}
console.log("sum -:", sum)

//reduce filter map
let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log("Total -:",total)
console.log("Sum -:", sum)

var scores = [12,13,14,16]
//create new array with even numbers of scores and multiply each value
// with 3 and sum themarray [12,14,16]
var evenScores = []
for(let i = 0;i<scores.length;i++)
{
    if(scores[i] %2 == 0)
    {
        evenScores.push(scores[i])
    }
}
console.log("Evenscores -:",evenScores)

let newFilterEvenScores = scores.filter(score=>score%2==0)  // Condition is present in filter
console.log("newFilterEvenScores -:", newFilterEvenScores) //[ 12, 14, 16 ]=>[36,42,48]

//map
let mappedArray = newFilterEvenScores.map(score=>score*3)   // OPeration is present in map
console.log("mappedArray -:", mappedArray)

let totalVal = mappedArray.reduce((sum,val)=>sum+val,0)
console.log("totalVal -:",totalVal)

var scores1 = [12,13,14,16]
console.log("scores1 -:",scores1)

let sumValue = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val) => sum + val,0)
console.log("sumValue -:",sumValue)

let fruits = ["banana","mango","pomegrante","apple"]
console.log("fruits.sort() ->",fruits.sort())
console.log("fruits.reverse() ->",fruits.reverse())


var scores1 = [12,3,19,16,14] //9
console.log("scores1.sort() ->", scores1.sort())
console.log("scores1.sort ->", scores1.sort((a,b)=> a-b))

scores1.sort(function(a,b){
    return a-b
})
console.log("scores1.sort ->", scores1.sort((a,b)=> b-a))
