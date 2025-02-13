// Create an array named studentNames with the names of your students.
// Add a new student name to the beginning of the array.
// Remove the last student name from the array.
// Sort the array in ascending order.

var studentNames = ["Deepak", "Sunil", "Bikash", "Aakash", "Abinash"];
console.log(studentNames);
console.log("Length of studentNames -:", studentNames.length);

studentNames.unshift("Rajesh")        // adds to the beginning of the array
console.log(studentNames);

studentNames.pop("Abinash")          // removes the last element of the array
console.log(studentNames);

studentNames.sort()                  // sorts the array in ascending order
console.log(studentNames);