// object


// let obj = {}

// let person = {
//     // properties = key : value
//     naam: "Samarth",
//     umar: 16,
//     isMale: true,
//     mailId: "sam@gmail.com"
// }

// console.log(person);

// // dot notation
// console.log(person.umar);
// console.log(person.isMale);

// // array method
// // console.log(person[mailId]); //nhi ❌
// console.log(person['mailId']); //nhi ✅
// keyts should alwayss be in the string here while accessing
// the array method way


// -------------------------------------
// change ✅


let arr = [10,20,30]
console.log( arr[1] ); //20
arr[1] = "sam"
console.log( arr[1] ); //sam


let obj = {
    age: 100,
    marks: 33,
    isMale: true
}

console.log(obj.marks);
obj.marks = false
console.log(obj.marks);
console.log(obj);


obj['marks'] = 10000
console.log(obj["marks"]);
console.log(obj);


// console.log(obj.length); // ❌




